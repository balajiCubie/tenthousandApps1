/**
 * Custom Hooks Library
 * 
 * Export all reusable hooks for the Calculator Cloud platform.
 * Import hooks from '@/hooks' for cleaner imports.
 * 
 * @example
 * import { useModal, useKeyboardShortcut } from '@/hooks';
 */

export { useAccordion } from './useAccordion';
export type { UseAccordionOptions, UseAccordionReturn } from './useAccordion';

export { useModal } from './useModal';
export type { UseModalReturn } from './useModal';

export { useKeyboardShortcut } from './useKeyboardShortcut';
export type { UseKeyboardShortcutOptions } from './useKeyboardShortcut';

export { useClickOutside } from './useClickOutside';
