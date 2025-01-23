import Link from 'next/link';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
/**
 * Header Component
 *
 * Displays a header with navigation links and a logo.
 *
 * @component
 * @example
 * ```tsx
 * <Header />
 * ```
 */
export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/70 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center text-xl font-bold text-[#111827] transition-all duration-200 hover:text-[#1A56DB]"
          >
            <GlobeAltIcon className="mr-2 h-6 w-6 text-blue-600" />
            Global Insights
          </Link>
          <div className="flex items-center space-x-8">
            <Link
              href="/compare"
              className="rounded-md px-3 py-2 text-[#4B5563] transition-all duration-200 hover:bg-gray-50 hover:text-[#111827]"
            >
              Compare
            </Link>
            <Link
              href="/about"
              className="rounded-md px-3 py-2 text-[#4B5563] transition-all duration-200 hover:bg-gray-50 hover:text-[#111827]"
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
