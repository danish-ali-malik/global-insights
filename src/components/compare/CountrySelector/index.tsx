'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowPathIcon, ExclamationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Country, SelectedCountries } from '../ComparisonSection/interfaces'
import { SearchInput } from './SearchInput'
import { CountryList } from './CountryList'
import { SelectedCountryList } from './SelectedCountryList'

interface CountrySelectorProps {
  selectedCountries: SelectedCountries
  allCountries: Country[]
  isLoading: boolean
  onSelectionChange: (countries: SelectedCountries) => void
  onCompare: (countries: SelectedCountries) => Promise<void>
}

export function CountrySelector({
  selectedCountries,
  allCountries,
  isLoading,
  onSelectionChange,
  onCompare,
}: CountrySelectorProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isComparing, setIsComparing] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Filter countries based on search query
  const filteredCountries = useCallback(() => {
    if (!searchQuery) return allCountries
    const query = searchQuery.toLowerCase()
    return allCountries.filter(country => 
      country.name.toLowerCase().includes(query) ||
      country.code.toLowerCase().includes(query)
    )
  }, [allCountries, searchQuery])

  // Handle country selection
  const handleSelect = useCallback((country: Country) => {
    if (selectedCountries.length >= 3) return
    if (selectedCountries.some(c => c.code === country.code)) return
    onSelectionChange([...selectedCountries, country])
    setSearchQuery('') // Clear search query after selection
    setIsDropdownOpen(false) // Close dropdown after selection
  }, [selectedCountries, onSelectionChange])

  // Handle country removal
  const handleRemove = useCallback((code: string) => {
    onSelectionChange(selectedCountries.filter(c => c.code !== code))
  }, [selectedCountries, onSelectionChange])

  // Handle search input focus
  const handleSearchFocus = useCallback(() => {
    setIsDropdownOpen(true)
  }, [])

  // Handle compare action
  const handleCompare = useCallback(async () => {
    if (selectedCountries.length < 2 || selectedCountries.length > 3 || isComparing) return
    
    try {
      setIsComparing(true)
      await onCompare(selectedCountries)
    } catch (err) {
      console.error('Error comparing countries:', err)
      setError(err instanceof Error ? err.message : 'Failed to compare countries')
      // Show error for 3 seconds
      setTimeout(() => setError(null), 3000)
    } finally {
      setIsComparing(false)
    }
  }, [selectedCountries, onCompare, isComparing])

  // Handle reset
  const handleReset = useCallback(() => {
    onSelectionChange([])
    setSearchQuery('')
    setIsDropdownOpen(false)
  }, [onSelectionChange])

  if (error) {
    return (
      <div role="alert" className="flex items-center gap-2 rounded-md bg-red-50 p-3 text-sm text-red-800">
        <ExclamationCircleIcon className="h-5 w-5 text-red-600" />
        <p>{error}</p>
      </div>
    )
  }

  const isCompareDisabled = selectedCountries.length < 2 || isComparing

  return (
	  <div className="space-y-4  bg-gray-50 p-6 rounded-lg max-w-2xl mx-auto w-full">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <SelectedCountryList
            selectedCountries={selectedCountries}
            onRemove={handleRemove}
          />
        </div>
        {selectedCountries.length > 0 && (
          <button
            onClick={handleReset}
            className="ml-4 flex items-center gap-1 rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            aria-label="Reset selection"
          >
            <XMarkIcon className="h-4 w-4" />
            Reset
          </button>
        )}
      </div>
      <div ref={dropdownRef} className="relative">
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          disabled={isLoading}
          onFocus={handleSearchFocus}
        />
        {isDropdownOpen && (
          <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg">
            <CountryList
              countries={filteredCountries()}
              selectedCodes={selectedCountries.map(c => c.code)}
              onSelect={handleSelect}
              isLoading={isLoading}
            />
          </div>
        )}
      </div>
      <button
        onClick={handleCompare}
        disabled={isCompareDisabled}
        className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-colors
          ${isCompareDisabled
            ? 'cursor-not-allowed bg-gray-100 text-gray-400'
            : 'bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          }`}
      >
        {isComparing ? (
          <>
            <ArrowPathIcon className="h-4 w-4 animate-spin" />
            Comparing...
          </>
        ) : selectedCountries.length === 0 ? (
          'Select 2-3 countries to compare'
        ) : selectedCountries.length === 1 ? (
          'Select one more country (max 3)'
        ) : (
          `Compare ${selectedCountries.length} Countries`
        )}
      </button>
    </div>
  )
} 