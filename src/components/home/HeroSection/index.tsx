import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { ScrollToSection } from '../ScrollToSection';

/**
 * HeroSection Component
 *
 * The main landing section of the Global Insights application.
 * Features a prominent headline, description, and call-to-action buttons.
 * Includes a decorative background grid pattern and a scroll indicator.
 *
 * @component
 * @example
 * ```tsx
 * <HeroSection />
 * ```
 */
export const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-white to-gray-50">
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-[0.02]" />
      <div className="container mx-auto px-4">
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="relative z-10 text-center">
            <div className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5">
              <span className="text-xs font-medium text-[#1A56DB] sm:text-sm">
                Discover • Compare • Analyze
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-[#111827] sm:mb-6 sm:text-4xl md:text-[44px]">
              Compare Countries
              <div className="mt-5">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Globally
                </span>
              </div>
            </h1>
            <p className="mx-auto mb-8 max-w-[600px] text-base leading-relaxed text-[#4B5563] sm:mb-10 sm:text-lg">
              Explore and compare key metrics across nations. Make informed decisions with
              comprehensive country data at your fingertips.
            </p>
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/compare"
                className="inline-flex items-center rounded-lg bg-[#1A56DB] px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#1E40AF] hover:shadow-md sm:px-8 sm:py-3 sm:text-base"
              >
                Start Comparing
                <ArrowRightIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-lg px-6 py-2.5 text-sm font-medium text-[#1A56DB] transition-all duration-200 hover:bg-blue-50 sm:px-8 sm:py-3 sm:text-base"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ScrollToSection targetId="features" text="Scroll to explore" />
    </div>
  );
};
