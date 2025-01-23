import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  onFocus?: () => void
}

export function SearchInput({ value, onChange, disabled, onFocus }: SearchInputProps) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        disabled={disabled}
        placeholder="Search for a country..."
        className="w-full rounded-lg border border-gray-300 p-3 pl-10 transition-colors
          focus:border-blue-500 focus:ring-2 focus:ring-blue-500
          disabled:cursor-not-allowed disabled:bg-gray-100"
        aria-label="Search countries"
      />
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
    </div>
  )
} 