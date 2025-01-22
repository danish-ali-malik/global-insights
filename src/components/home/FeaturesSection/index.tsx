import { FEATURES } from './constants/index';
import type { Feature } from './interfaces/index';

/**
 * FeaturesSection Component
 *
 * Displays the key features and benefits of Global Insights in a grid layout.
 * Each feature is represented by a card with an icon, title, and description.
 * The layout is responsive and adjusts from 1 to 4 columns based on screen size.
 *
 * @component
 * @example
 * ```tsx
 * <FeaturesSection />
 * ```
 *
 * @see {@link FEATURES} for the feature data structure
 */
export const FeaturesSection = () => {
  return (
    <section id="features" className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-2xl font-bold text-[#111827] sm:mb-16 sm:text-3xl">
          Why Choose Global Insights?
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature: Feature, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-100 bg-white p-4 transition-all duration-200 hover:shadow-lg sm:p-6"
            >
              <div className="mx-auto mb-4 w-fit rounded-xl bg-gray-50 p-2 transition-colors duration-200 group-hover:bg-blue-50 sm:p-3 md:mx-0">
                <feature.Icon className={`h-6 w-6 sm:h-8 sm:w-8 ${feature.iconColor}`} />
              </div>
              <h3 className="mb-2 text-center text-lg font-semibold text-[#111827] sm:text-xl md:text-left">
                {feature.title}
              </h3>
              <p className="text-center text-sm text-[#4B5563] sm:text-base md:text-left">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
