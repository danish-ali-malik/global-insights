export interface ComparisonResultsProps {
  countries: Array<CountryDetails>;
}

export interface CountryDetails {
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
}
