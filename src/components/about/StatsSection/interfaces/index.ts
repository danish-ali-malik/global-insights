/**
 * Stat Interface
 *
 * Defines the structure for each statistic item in the Stats section.
 *
 * @interface Stat
 * @property {string} value - The numerical or text value to display
 * @property {string} label - The description of what the value represents
 */
export interface Stat {
  value: string;
  label: string;
}
