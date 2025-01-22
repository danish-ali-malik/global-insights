'use client';

import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { ScrollToSectionProps } from './interfaces';

/**
 * ScrollToSection Component
 *
 * A clickable button that smoothly scrolls to the specified section.
 * Includes an animated down arrow and hover effects.
 *
 * @component
 * @example
 * ```tsx
 * <ScrollToSection targetId="features" text="Scroll to explore" />
 * ```
 *
 * @param {Object} props - Component props
 * @param {string} props.targetId - ID of the target section to scroll to
 * @param {string} [props.text="Scroll to explore"] - Text to display above the arrow
 * @param {string} [props.className] - Additional CSS classes to apply
 */
export const ScrollToSection = ({
  targetId,
  text = 'Scroll to explore',
  className = '',
}: ScrollToSectionProps) => {
  const scrollToSection = () => {
    const section = document.querySelector(`#${targetId}`);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToSection}
      className={`absolute bottom-8 left-0 right-0 mx-auto flex w-fit animate-bounce cursor-pointer flex-col items-center transition-colors duration-200 hover:text-gray-600 ${className}`}
      aria-label={`Scroll to ${targetId} section`}
    >
      <span className="mb-2 text-xs text-gray-400 sm:text-sm">{text}</span>
      <ArrowDownIcon className="h-5 w-5 text-gray-400 sm:h-6 sm:w-6" />
    </button>
  );
};
