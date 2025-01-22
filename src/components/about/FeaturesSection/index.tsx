import { FEATURES } from './constants';
import type { Feature } from './interfaces';

/**
 * FeaturesSection Component
 * Displays the key features and capabilities of the platform
 *
 * @returns {JSX.Element} The rendered FeaturesSection component
 */
export function FeaturesSection() {
  return (
    <section className="mt-24 bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Everything you need for global analysis
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Access comprehensive data from over 200 countries, with real-time updates and intuitive
            visualization tools.
          </p>
        </div>

        <div className="mx-auto mt-16 sm:mt-20">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature: Feature, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <dt className="flex flex-col items-center sm:items-start">
                  <div className="mb-6 rounded-lg bg-blue-600 p-3">
                    <feature.Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-center text-xl font-semibold leading-7 text-gray-900 sm:text-left">
                    {feature.title}
                  </span>
                </dt>
                <dd className="mt-4 text-center text-base leading-7 text-gray-600 sm:text-left">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
