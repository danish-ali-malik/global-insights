import { STATS } from './constants';
import type { Stat } from './interfaces';

/**
 * StatsSection Component
 * Displays key statistics and impact metrics of the platform
 *
 * @returns {JSX.Element} The rendered StatsSection component
 */
export function StatsSection() {
  return (
    <section className="mb-32 mt-32 sm:mb-40 sm:mt-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Trusted by organizations worldwide
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Over 1 million monthly users rely on Global Insights for their data needs
            </p>
          </div>

          <dl className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat: Stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:items-start"
              >
                <dt className="text-center text-sm font-medium leading-6 text-gray-600 sm:text-left">
                  {stat.label}
                </dt>
                <dd className="order-first text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-left">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
