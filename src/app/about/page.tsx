import type { Metadata } from 'next';
import { HeroSection } from '@/components/about/HeroSection';
import { FeaturesSection } from '@/components/about/FeaturesSection';
import { StatsSection } from '@/components/about/StatsSection';

/**
 * Metadata configuration for the About page
 * Implements SEO best practices with proper title and description
 */
export const metadata: Metadata = {
  title: 'About | Global Insights',
  description:
    'Learn about Global Insights - Your comprehensive platform for comparing global economic indicators and country statistics.',
  openGraph: {
    title: 'About Global Insights',
    description: 'Your comprehensive platform for global data analysis and country comparisons.',
    type: 'website',
  },
};

/**
 * AboutPage Component
 * A modern, accessible page that provides information about Global Insights
 * Implements responsive design, semantic HTML, and accessibility features
 *
 * @returns {JSX.Element} The rendered About page
 */
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50/50">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
    </main>
  );
}
