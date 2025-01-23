import { Country } from '../ComparisonSection/interfaces';
import Image from 'next/image';

interface CountryListProps {
  countries: Country[];
  selectedCodes: string[];
  onSelect: (country: Country) => void;
  isLoading: boolean;
}

export function CountryList({ countries, selectedCodes, onSelect, isLoading }: CountryListProps) {
  if (isLoading) {
    return (
      <div className="flex h-32 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600" />
      </div>
    );
  }

  if (countries.length === 0) {
    return (
      <div className="rounded-lg bg-gray-50 p-8 text-center">
        <p className="text-gray-500">No countries found matching your search.</p>
      </div>
    );
  }

  return (
    <ul
      className="absolute z-50 max-h-64 w-full divide-y divide-gray-100 overflow-y-auto rounded-lg bg-white shadow-lg"
      role="listbox"
    >
      {countries
        .filter(country => !selectedCodes.includes(country.code))
        .map(country => {
          const isDisabled = selectedCodes.length >= 3;

          return (
            <li key={country.code}>
              <button
                onClick={() => !isDisabled && onSelect(country)}
                className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors
                  ${isDisabled ? 'cursor-not-allowed bg-gray-50 text-gray-400' : 'hover:bg-gray-50'}`}
                disabled={isDisabled}
                role="option"
                aria-selected={false}
              >
                <Image
                  src={country.flagUrl}
                  alt={`Flag of ${country.name}`}
                  width={28}
                  height={20}
                  className="rounded object-cover"
                  style={{ width: '28px', height: '20px' }}
                />
                <span className="flex-1 font-medium">{country.name}</span>
                <span className="text-sm text-gray-500">{country.code}</span>
              </button>
            </li>
          );
        })}
    </ul>
  );
}
