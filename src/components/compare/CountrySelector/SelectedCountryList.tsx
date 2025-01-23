import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Country } from '../ComparisonSection/interfaces';

interface SelectedCountryListProps {
  selectedCountries: Country[];
  onRemove: (code: string) => void;
}

export function SelectedCountryList({ selectedCountries, onRemove }: SelectedCountryListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {selectedCountries.map(country => (
        <div
          key={country.code}
          className="flex items-center gap-2 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-blue-800"
        >
          <Image
            src={country.flagUrl}
            alt={`Flag of ${country.name}`}
            width={24}
            height={16}
            style={{ width: '24px', height: '16px' }}
            className="rounded object-cover shadow-sm"
          />
          <span className="font-medium">{country.name}</span>
          <button
            onClick={() => onRemove(country.code)}
            className="text-blue-600 hover:text-blue-800 focus:outline-none"
            aria-label={`Remove ${country.name}`}
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
