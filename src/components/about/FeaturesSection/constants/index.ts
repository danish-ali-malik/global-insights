import {
  ChartBarIcon,
  BoltIcon,
  PresentationChartLineIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';
import type { Feature } from '../interfaces';

/**
 * Features Array
 *
 * Contains the data for all features displayed in the Features section.
 * Each feature includes an icon, title, and description.
 *
 * @type {Feature[]}
 */
export const FEATURES: Feature[] = [
  {
    title: '200+ Countries',
    description: 'Comprehensive coverage of nations worldwide',
    Icon: ChartBarIcon,
  },
  {
    title: 'Real-time Data',
    description: 'Live updates on key metrics',
    Icon: BoltIcon,
  },
  {
    title: '50+ Metrics',
    description: 'Detailed economic indicators',
    Icon: PresentationChartLineIcon,
  },
  {
    title: '24/7 Updates',
    description: 'Continuous data refreshes',
    Icon: ArrowPathIcon,
  },
];
