import {
  ChartBarIcon,
  PresentationChartLineIcon,
  GlobeAltIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';
import { Feature } from '../interfaces';

/**
 * Features Array
 * 
 * Contains the data for all features displayed in the Features section.
 * Each feature includes an icon, title, description, and color scheme.
 * 
 * @type {Feature[]}
 */
export const FEATURES: Feature[] = [
  {
    title: 'Real-time Data',
    description: 'Access up-to-date information about countries worldwide.',
    Icon: ChartBarIcon,
    iconColor: 'text-green-500',
  },
  {
    title: 'Visual Comparisons',
    description: 'Compare countries side by side with intuitive visualizations.',
    Icon: PresentationChartLineIcon,
    iconColor: 'text-blue-500',
  },
  {
    title: 'Key Metrics',
    description: 'Analyze population, GDP, area, and other important indicators.',
    Icon: GlobeAltIcon,
    iconColor: 'text-blue-500',
  },
  {
    title: 'Easy to Use',
    description: 'Simple and intuitive interface for quick comparisons.',
    Icon: CheckBadgeIcon,
    iconColor: 'text-red-500',
  },
]; 