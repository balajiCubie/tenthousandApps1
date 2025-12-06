import React from 'react';

export interface SectionHeaderProps {
    /** Main heading text */
    title: string;
    /** Optional subheading text */
    subtitle?: string;
    /** Whether to center the text - defaults to true */
    centered?: boolean;
    /** Additional CSS classes */
    className?: string;
    /** Title size variant */
    size?: 'sm' | 'md' | 'lg';
}

/**
 * SectionHeader - Consistent heading component for page sections.
 * 
 * Implements the standard section header pattern used across the platform:
 * - Bold title with responsive sizing
 * - Optional subtitle with muted color
 * - Center-aligned by default
 * 
 * @example
 * <SectionHeader 
 *   title="Our Features" 
 *   subtitle="Discover what makes us different"
 * />
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    subtitle,
    centered = true,
    className = '',
    size = 'md',
}) => {
    const sizeStyles = {
        sm: 'text-2xl sm:text-3xl',
        md: 'text-3xl sm:text-4xl',
        lg: 'text-4xl sm:text-5xl',
    };

    return (
        <div className={`${centered ? 'text-center' : ''} mb-12 ${className}`}>
            <h2 className={`${sizeStyles[size]} font-bold text-gray-900 mb-4`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`text-lg text-gray-600 ${centered ? 'max-w-2xl mx-auto' : ''}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};
