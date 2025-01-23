import ComparisonSection from '@/components/compare/ComparisonSection'
import { HeroSection } from '@/components/compare/HeroSection'

/**
 * Metadata configuration for the Compare page
 * Implements SEO best practices with proper title and description
 */
export const metadata = {
	title: 'Compare Countries | Global Insights',
	description: 'Compare key statistics and data between different countries around the world.',
}

/**
 * ComparePage Component
 * A modern, accessible page that provides a comparison tool for countries
 * Implements responsive design, semantic HTML, and accessibility features
 *
 * @returns {JSX.Element} The rendered Compare page
 */
export default function ComparePage() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-white to-gray-50/50">
			<HeroSection />
			<ComparisonSection />
		</main>
	)
}