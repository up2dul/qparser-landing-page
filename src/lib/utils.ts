import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class values into a single string using Tailwind CSS class merging.
 *
 * @param {ClassValue[]} inputs - An array of class values to be merged.
 * @return {string} The merged class string.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
