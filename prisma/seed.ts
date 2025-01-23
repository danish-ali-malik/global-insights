import { PrismaClient } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();

interface RestCountry {
  name: {
    common: string;
    official: string;
  };
  cca3: string;
  capital?: string[];
  region?: string;
  subregion?: string;
  population: number;
  area: number;
  flags: {
    svg: string;
  };
  currencies?: Record<string, { name: string; symbol: string }>;
  languages?: Record<string, string>;
  borders?: string[];
}

/**
 * Seed the database with countries
 */
async function main() {
  // Check if we already have countries in the database
  const countryCount = await prisma.country.count();

  if (countryCount > 0) {
    console.log('Database already populated with countries. Skipping seed.');
    return;
  }

  try {
    const response = await axios.get<RestCountry[]>('https://restcountries.com/v3.1/all');
    const countries = response.data;

    // Process in batches to avoid overwhelming the database
    const batchSize = 50;
    for (let i = 0; i < countries.length; i += batchSize) {
      const batch = countries.slice(i, i + batchSize);

      await Promise.all(
        batch.map(country =>
          prisma.country.create({
            data: {
              name: country.name.common,
              officialName: country.name.official,
              code: country.cca3,
              capital: country.capital?.[0] || null,
              region: country.region || null,
              subregion: country.subregion || null,
              population: country.population || null,
              area: country.area || null,
              flagUrl: country.flags.svg,
              currencies: country.currencies ? Object.keys(country.currencies) : [],
              languages: country.languages ? Object.values(country.languages) : [],
              borders: country.borders || [],
            },
          })
        )
      );
    }
  } catch (error) {
    throw error;
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
