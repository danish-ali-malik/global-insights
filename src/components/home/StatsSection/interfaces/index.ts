import { SVGProps } from 'react';

/**
 * Stat Interface
 *
 * Defines the structure for each statistic item in the Stats section.
 *
 * @interface Stat
 * @property {string} value - The numerical or text value to display
 * @property {string} label - The description of what the value represents
 * @property {React.ComponentType<React.SVGProps<SVGSVGElement>>} Icon - The Heroicon component to display
 * @property {string} iconColor - The Tailwind CSS color class for the icon
 */
export interface Stat {
  value: string;
  label: string;
  Icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  iconColor: string;
}
