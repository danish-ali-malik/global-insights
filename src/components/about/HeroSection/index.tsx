import { GlobeAltIcon } from '@heroicons/react/24/outline';

/**
 * HeroSection Component
 * The main hero section of the About page featuring the title and main description
 *
 * @returns {JSX.Element} The rendered HeroSection component
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            <div className="flex items-center space-x-3">
              <span className="inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600 ring-1 ring-inset ring-blue-600/20">
                About Our Platform
              </span>
            </div>

            <h1 className="mt-10 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-left lg:text-5xl">
              Empowering Global
              <div className="mt-2 text-center sm:mt-3 lg:text-left">
                <span className="relative bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Decision Making
                </span>
              </div>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl lg:mx-0 lg:text-left">
              Global Insights provides comprehensive data analysis and visualization tools, helping
              you make informed decisions through detailed country comparisons and real-time
              metrics.
            </p>
          </div>

          <div className="relative mt-12 lg:col-span-5 lg:mt-0">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="overflow-hidden rounded-2xl bg-blue-50 p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative aspect-[4/3]">
                  <div className="flex h-full items-center justify-center">
                    <GlobeAltIcon className="h-32 w-32 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
