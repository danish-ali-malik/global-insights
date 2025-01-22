import { SVGProps } from 'react';

/**
 * Feature Interface
 *
 * Defines the structure for each feature item in the Features section.
 *
 * @interface Feature
 * @property {string} title - The display title of the feature
 * @property {string} description - A brief description of the feature
 * @property {React.ComponentType<React.SVGProps<SVGSVGElement>>} Icon - The Heroicon component to display
 */
export interface Feature {
  title: string;
  description: string;
  Icon: React.ComponentType<SVGProps<SVGSVGElement>>;
}
