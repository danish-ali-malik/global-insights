import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { unstable_cache } from 'next/cache'

// Types for our response
interface CountryListItem {
	code: string
	name: string
	flagUrl: string
}

// Error response type
interface ErrorResponse {
	error: string
	statusCode: number
}

// Cache duration: 24 hours
const CACHE_DURATION = 86400

// Get cached countries list
const getCachedCountries = unstable_cache(
	async () => {
		try {
			const countries = await prisma.country.findMany({
				select: {
					code: true,
					name: true,
					flagUrl: true,
				},
				orderBy: {
					name: 'asc',
				},
			})
			return countries
		} catch (error) {
			console.error('Error fetching countries:', error)
			throw error
		}
	},
	['countries-list'],
	{
		revalidate: CACHE_DURATION,
		tags: ['countries'],
	}
)

export async function GET(): Promise<NextResponse<CountryListItem[] | ErrorResponse>> {
	try {
		const countries = await getCachedCountries()

		// Return 404 if no countries found
		if (!countries || countries.length === 0) {
			return NextResponse.json(
				{ error: 'No countries found', statusCode: 404 },
				{ status: 404 }
			)
		}

		return NextResponse.json(countries, {
			status: 200,
			headers: {
				'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
			},
		})
	} catch (error) {
		console.error('Countries API Error:', error)
		return NextResponse.json(
			{ error: 'Internal Server Error', statusCode: 500 },
			{ status: 500 }
		)
	}
}