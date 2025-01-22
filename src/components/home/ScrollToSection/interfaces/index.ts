/**
 * ScrollToSection Component Props Interface
 * 
 * @interface ScrollToSectionProps
 * @property {string} targetId - ID of the target section to scroll to
 * @property {string} [text] - Text to display above the arrow
 * @property {string} [className] - Additional CSS classes to apply
 */
export interface ScrollToSectionProps {
  targetId: string;
  text?: string;
  className?: string;
} 