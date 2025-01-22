import {
  GlobeAltIcon,
  UserGroupIcon,
  ChartBarIcon,
  DocumentChartBarIcon,
} from '@heroicons/react/24/outline';
import { Stat } from '../interfaces';

/**
 * Stats Array
 * 
 * Contains the data for all statistics displayed in the Stats section.
 * Each stat includes a value, label, icon, and color scheme.
 * 
 * @type {Stat[]}
 */
export const STATS: Stat[] = [
  {
    value: '200+',
    label: 'Countries Covered',
    Icon: GlobeAltIcon,
    iconColor: 'text-blue-500',
  },
  {
    value: '1M+',
    label: 'Monthly Users',
    Icon: UserGroupIcon,
    iconColor: 'text-green-500',
  },
  {
    value: '50+',
    label: 'Data Metrics',
    Icon: ChartBarIcon,
    iconColor: 'text-purple-500',
  },
  {
    value: '24/7',
    label: 'Real-time Updates',
    Icon: DocumentChartBarIcon,
    iconColor: 'text-orange-500',
  },
]; 