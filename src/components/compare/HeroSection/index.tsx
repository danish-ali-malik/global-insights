/**
 * HeroSection Component
 * A modern, accessible hero section with a title and description
 * Implements responsive design, semantic HTML, and accessibility features
 *
 * @returns {JSX.Element} The rendered HeroSection
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-32" aria-labelledby="hero-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-blue-50 px-4 py-2">
            <span className="text-sm font-medium text-blue-600">Discover • Compare • Analyze</span>
          </div>
          <div className="space-y-4">
            <h1
              id="hero-heading"
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
            >
              Compare Countries
              <br />
              <div className="mt-2 text-center sm:mt-3">
                <span className="text-blue-600">Globally</span>
              </div>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-500">
              Explore and compare key metrics across nations. Make informed decisions with
              comprehensive country data at your fingertips.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
