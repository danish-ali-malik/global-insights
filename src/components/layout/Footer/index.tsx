/**
 * Footer Component
 *
 * Displays a footer with copyright information and navigation links.
 *
 * @component
 * @example
 * ```tsx
 * <Footer />
 * ```
 */
export const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">
              © {new Date().getFullYear()} Global Insights. All rights reserved.
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="/privacy"
              className="text-sm text-gray-600 transition-colors hover:text-gray-900"
            >
              Privacy Policy
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="/terms"
              className="text-sm text-gray-600 transition-colors hover:text-gray-900"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
