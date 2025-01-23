import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { unstable_cache } from 'next/cache';

// Types
interface ComparisonResponse {
  countries: Array<{
    code: string;
    name: string;
    officialName: string;
    capital: string | null;
    region: string | null;
    subregion: string | null;
    population: number | null;
    area: number | null;
    flagUrl: string;
    currencies: string[];
    languages: string[];
    borders: string[];
  }>;
}

interface ErrorResponse {
  error: string;
  statusCode: number;
}

// Cache duration: 1 hour for comparison data
const CACHE_DURATION = 3600;

// Get cached comparison data
const getCachedComparison = unstable_cache(
  async (countryCodes: string[]) => {
    try {
      const sortedCodes = [...countryCodes].sort();

      const countries = await prisma.country.findMany({
        where: {
          code: {
            in: sortedCodes,
          },
        },
      });

      if (countries.length !== sortedCodes.length) {
        throw new Error('One or more country codes are invalid');
      }

      return countries;
    } catch (error) {
      console.error('Error fetching comparison data:', error);
      throw error;
    }
  },
  ['countries-comparison'],
  {
    revalidate: CACHE_DURATION,
    tags: ['comparison'],
  }
);

export async function POST(
  request: NextRequest
): Promise<NextResponse<ComparisonResponse | ErrorResponse>> {
  try {
    const body = await request.json();
    const { countryCodes } = body;

    // Enhanced validation
    if (!Array.isArray(countryCodes)) {
      return NextResponse.json(
        { error: 'countryCodes must be an array', statusCode: 400 },
        { status: 400 }
      );
    }

    if (countryCodes.length < 2 || countryCodes.length > 3) {
      return NextResponse.json(
        { error: 'Please select 2 or 3 countries to compare', statusCode: 400 },
        { status: 400 }
      );
    }

    // Validate each country code format
    if (!countryCodes.every(code => typeof code === 'string' && /^[A-Z]{3}$/.test(code))) {
      return NextResponse.json(
        { error: 'Invalid country code format. Must be 3 uppercase letters.', statusCode: 400 },
        { status: 400 }
      );
    }

    const countries = await getCachedComparison(countryCodes);

    return NextResponse.json(
      { countries },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=1800',
        },
      }
    );
  } catch (error) {
    console.error('Comparison API Error:', error);

    if (error instanceof Error && error.message === 'One or more country codes are invalid') {
      return NextResponse.json({ error: error.message, statusCode: 400 }, { status: 400 });
    }

    return NextResponse.json({ error: 'Internal Server Error', statusCode: 500 }, { status: 500 });
  }
}
