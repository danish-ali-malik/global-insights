'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { CountrySelector } from '../CountrySelector';
import { ComparisonResults } from '../ComparisonResults';
import { SelectedCountries, Country } from './interfaces';
import { CountryDetails } from '../ComparisonResults/interfaces/interfaces';

export default function ComparisonSection() {
  const searchParams = useSearchParams();
  const [selectedCountries, setSelectedCountries] = useState<SelectedCountries>([]);
  const [allCountries, setAllCountries] = useState<Country[]>([]);
  const [comparisonData, setComparisonData] = useState<{ countries: CountryDetails[] } | null>(
    null
  );
  const [comparisonError, setComparisonError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const initialLoadDone = useRef(false);

  // Handle comparison
  const handleCompare = useCallback(async (countries: SelectedCountries) => {
    try {
      setComparisonError(null);
      const response = await fetch('/api/countries/compare', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          countryCodes: countries.map(c => c.code),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to compare countries');
      }

      const data = await response.json();
      setComparisonData(data);
    } catch (err) {
      console.error('Error in comparison:', err);
      setComparisonError('Failed to compare countries. Please try again.');
      throw err;
    }
  }, []);

  // Fetch all countries and handle URL params
  useEffect(() => {
    if (initialLoadDone.current) return;

    const loadCountries = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/countries', {
          headers: { Accept: 'application/json' },
          cache: 'force-cache',
        });

        if (!response.ok) throw new Error('Failed to fetch countries');

        const countries = await response.json();
        setAllCountries(countries);

        // Handle URL params if they exist
        const countryCodes = searchParams.get('countries');
        if (countryCodes) {
          const codes = countryCodes.split(',').filter(code =>
            // Validate code format: 3 letter uppercase country code
            /^[A-Z]{3}$/.test(code.trim())
          );
          const validCountries = countries.filter((c: Country) => codes.includes(c.code));
          if (validCountries.length > 0) {
            setSelectedCountries(validCountries);
            // If we have 2 or more countries from URL, trigger comparison
            if (validCountries.length >= 2) {
              handleCompare(validCountries);
            }
          }
        }
      } catch (error) {
        console.error('Error loading countries:', error);
      } finally {
        setIsLoading(false);
        initialLoadDone.current = true;
      }
    };

    loadCountries();
  }, [searchParams, handleCompare]);

  // Update URL when selection changes
  const handleSelectionChange = useCallback((countries: SelectedCountries) => {
    setSelectedCountries(countries);

    // Reset comparison data if no countries selected
    if (countries.length === 0) {
      setComparisonData(null);
      setComparisonError(null);
    }

    // Update URL without triggering navigation
    const codes = countries.map(c => c.code).join(',');
    const url = new URL(window.location.href);
    if (codes) {
      url.searchParams.set('countries', codes);
    } else {
      url.searchParams.delete('countries');
    }
    window.history.replaceState({}, '', url.toString());
  }, []);

  return (
    <>
      <section className="relative" aria-labelledby="selection-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg  p-4 text-center">
            <CountrySelector
              selectedCountries={selectedCountries}
              allCountries={allCountries}
              isLoading={isLoading}
              onSelectionChange={handleSelectionChange}
              onCompare={handleCompare}
            />
            {comparisonError && (
              <div role="alert" className="rounded-xl bg-red-50 p-4 text-red-800">
                {comparisonError}
              </div>
            )}
          </div>
        </div>
      </section>

      {comparisonData && <ComparisonResults countries={comparisonData.countries} />}
    </>
  );
}
