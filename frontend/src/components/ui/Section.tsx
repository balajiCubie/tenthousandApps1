import React from 'react';
import { Container } from './Container';

/**
 * Background variant configurations for sections.
 * Follows AWS-style design patterns with clean, professional aesthetics.
 */
const backgroundVariants = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30',
    dark: 'bg-[#232f3e]',
} as const;

export interface SectionProps {
    /** Child content to render within the section */
    children: React.ReactNode;
    /** Background style variant */
    background?: keyof typeof backgroundVariants;
    /** Additional CSS classes */
    className?: string;
    /** Whether to include decorative gradient blobs */
    decorators?: boolean;
    /** Custom padding - defaults to py-20 */
    padding?: 'sm' | 'md' | 'lg';
    /** ID for anchor links */
    id?: string;
}

/**
 * Section - A reusable wrapper component for page sections.
 * 
 * Provides consistent spacing, backgrounds, and optional decorative elements
 * following AWS-style enterprise design patterns.
 * 
 * @example
 * <Section background="gray" decorators>
 *   <SectionHeader title="Features" subtitle="Explore our tools" />
 *   <FeatureGrid />
 * </Section>
 */
export const Section: React.FC<SectionProps> = ({
    children,
    background = 'white',
    className = '',
    decorators = false,
    padding = 'md',
    id,
}) => {
    const paddingStyles = {
        sm: 'py-12',
        md: 'py-20',
        lg: 'py-28',
    };

    return (
        <section
            id={id}
            className={`${paddingStyles[padding]} ${backgroundVariants[background]} relative overflow-hidden ${className}`}
        >
            {/* Optional decorative gradient blobs */}
            {decorators && (
                <>
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-3xl" />
                </>
            )}
            <Container className="relative z-10">
                {children}
            </Container>
        </section>
    );
};
