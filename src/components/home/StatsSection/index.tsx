import { STATS } from './constants/index';
import type { Stat } from './interfaces/index';

/**
 * StatsSection Component
 *
 * Displays key statistics and metrics about Global Insights in a grid layout.
 * Features animated icons and hover effects for interactive engagement.
 * Responsive design with 1 to 4 columns based on viewport width.
 *
 * @component
 * @example
 * ```tsx
 * <StatsSection />
 * ```
 *
 * @see {@link STATS} for the statistics data structure
 * @see {@link Stat} for the type definition of each statistic
 */
export const StatsSection = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <h2 className="mb-3 text-2xl font-bold text-[#111827] sm:mb-4 sm:text-3xl">
            Trusted Worldwide
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">
            Empowering users with comprehensive global data and insights
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat: Stat, index: number) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-100 bg-white p-4 text-center transition-all duration-200 hover:shadow-lg sm:p-8"
            >
              <div className="mb-4">
                <stat.Icon className={`mx-auto h-6 w-6 sm:h-8 sm:w-8 ${stat.iconColor}`} />
              </div>
              <div className="mb-2 text-2xl font-bold text-[#111827] sm:text-3xl">{stat.value}</div>
              <div className="text-sm font-medium text-gray-600 sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
