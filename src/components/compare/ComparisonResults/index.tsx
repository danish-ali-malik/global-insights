'use client'

import { useMemo } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { 
  GlobeEuropeAfricaIcon,
  MapPinIcon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  CurrencyDollarIcon,
  LanguageIcon,
  GlobeAmericasIcon
} from '@heroicons/react/24/outline'
import { ComparisonResultsProps } from './interfaces/interfaces'
import { CHART_COLORS, CHART_HEIGHT, CHART_COLUMN_WIDTH } from './constants/constants'

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export function ComparisonResults({ countries }: ComparisonResultsProps) {
  const formatNumber = (num: number | null) => {
    if (num === null) return 'N/A'
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(num)
  }

  const formatArray = (arr: string[]) => {
    if (arr.length === 0) return 'None'
    return arr.join(', ')
  }

  // Chart data for population and area
  const chartData = useMemo(() => ({
    options: {
      chart: {
        type: 'bar' as const,
        stacked: false,
        toolbar: {
          show: false
        },
        parentHeightOffset: 0,
        offsetY: 30
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: CHART_COLUMN_WIDTH,
          borderRadius: 4,
          dataLabels: {
            position: 'top'
          }
        }
      },
      colors: [CHART_COLORS.population, CHART_COLORS.area],
      dataLabels: {
        enabled: true,
        formatter: function(value: number) {
          return formatNumber(value)
        },
        offsetY: -20,
        style: {
          fontSize: '12px'
        }
      },
      grid: {
        padding: {
          top: 20
        },
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      xaxis: {
        categories: countries.map(c => c.name),
        labels: {
          style: {
            fontSize: '12px'
          }
        }
      },
      yaxis: [
        {
          title: {
            text: 'Population'
          },
          labels: {
            formatter: function(value: number) {
              return formatNumber(value)
            }
          }
        },
        {
          opposite: true,
          title: {
            text: 'Area (km²)'
          },
          labels: {
            formatter: function(value: number) {
              return formatNumber(value)
            }
          }
        }
      ],
      tooltip: {
        shared: false,
        intersect: true,
        y: {
          formatter: function(value: number) {
            return formatNumber(value)
          }
        }
      },
      legend: {
        horizontalAlign: 'left' as const,
        position: 'top' as const,
        offsetX: 40,
        offsetY: 10,
        floating: true,
        markers: {
          size: 12,
          strokeWidth: 0,
          shape: 'square' as const
        }
      }
    },
    series: [
      {
        name: 'Population',
        data: countries.map(c => c.population || 0)
      },
      {
        name: 'Area',
        data: countries.map(c => c.area || 0)
      }
    ]
  }), [countries])

  return (
    <section className="relative overflow-hidden bg-gray-50 mt-12">
	<div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center gap-8 mt-12 mb-12">
        {countries.map(country => (
          <div 
            key={country.code} 
            className="flex items-center gap-3 rounded-xl bg-white px-6 py-4 shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <Image
              src={country.flagUrl}
              alt={`Flag of ${country.name}`}
              width={64}
              height={40}
              style={{ width: '64px', height: '40px' }}
              className="rounded-lg object-cover shadow-sm"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{country.name}</h3>
              <p className="text-sm text-gray-500">{country.code}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
        <h3 className="mb-6 text-lg font-semibold text-gray-900">Key Metrics Comparison</h3>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={CHART_HEIGHT}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-12">
        {countries.map(country => (
          <div 
            key={country.code} 
            className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-200 space-y-4"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-blue-600">
                  <BuildingLibraryIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-500">Official Name</p>
                  <p className="text-base text-gray-900">{country.officialName}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 text-blue-600">
                  <BuildingOffice2Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-500">Capital</p>
                  <p className="text-base text-gray-900">{country.capital || 'N/A'}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 text-blue-600">
                  <GlobeEuropeAfricaIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-500">Region</p>
                  <p className="text-base text-gray-900">{country.region || 'N/A'}</p>
                </div>
              </div>

              {/* Subregion */}
              <div className="flex items-start gap-3">
                <span className="mt-1 text-blue-600">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-500">Subregion</p>
                  <p className="text-base text-gray-900">{country.subregion || 'N/A'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-blue-600">
                  <CurrencyDollarIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-500">Currencies</p>
                  <p className="text-base text-gray-900">{formatArray(country.currencies)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-blue-600">
                  <LanguageIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-500">Languages</p>
                  <p className="text-base text-gray-900">{formatArray(country.languages)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-blue-600">
                  <GlobeAmericasIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-500">Border Countries</p>
                  <p className="text-base text-gray-900">{formatArray(country.borders)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  )
} 