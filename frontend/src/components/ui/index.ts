/**
 * UI Component Library
 * 
 * This barrel file exports all reusable UI components for the Calculator Cloud platform.
 * Import components from '@/components/ui' for cleaner imports.
 * 
 * @example
 * import { Button, Card, Section, SectionHeader } from '@/components/ui';
 */

// Layout Components
export { Container } from './Container';
export type { ContainerProps } from './Container';

export { Section } from './Section';
export type { SectionProps } from './Section';

// Typography & Headers
export { SectionHeader } from './SectionHeader';
export type { SectionHeaderProps } from './SectionHeader';

// Interactive Components
export { Button } from './Button';
export type { ButtonProps } from './Button';

export { Card } from './Card';
export type { CardProps } from './Card';

export { Accordion } from './Accordion';
export type { AccordionProps, AccordionItem } from './Accordion';

// Display Components
export { IconBox, iconGradients } from './IconBox';
export type { IconBoxProps, IconGradient } from './IconBox';

export { StatCard } from './StatCard';
export type { StatCardProps } from './StatCard';

export { FeatureCard } from './FeatureCard';
export type { FeatureCardProps } from './FeatureCard';

// Decorative Components
export { GradientBlob } from './GradientBlob';
export type { GradientBlobProps } from './GradientBlob';

// Links & Navigation
export { LinkWithArrow } from './LinkWithArrow';
export type { LinkWithArrowProps } from './LinkWithArrow';
