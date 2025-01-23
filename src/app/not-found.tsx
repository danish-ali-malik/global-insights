import Link from 'next/link';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

/**
 * 404 Page
 * @returns
 */
export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-4 text-center">
        <div className="rounded-xl bg-white p-8 shadow-lg">
          <div className="mb-6 flex justify-center">
            <GlobeAltIcon className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="mb-2 text-4xl font-bold text-gray-900">404</h1>
          <h2 className="mb-4 text-xl font-semibold text-gray-700">Page Not Found</h2>
          <p className="mb-8 text-gray-500">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
