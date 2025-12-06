import React from 'react';

export interface GradientBlobProps {
    /** Position of the blob - top, bottom, left, right combinations */
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center-left' | 'center-right';
    /** Size of the blob */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /** Gradient colors */
    colors?: string;
    /** Additional CSS classes */
    className?: string;
}

/**
 * GradientBlob - A decorative gradient circle with blur effect.
 * 
 * Used as background decoration in sections to add visual depth
 * and a modern cloud-inspired aesthetic.
 * 
 * @example
 * <GradientBlob position="top-right" size="lg" colors="from-purple-300/20 to-pink-300/20" />
 */
export const GradientBlob: React.FC<GradientBlobProps> = ({
    position = 'top-right',
    size = 'md',
    colors = 'from-blue-300/20 to-purple-300/20',
    className = '',
}) => {
    const positionStyles = {
        'top-left': '-top-20 -left-20',
        'top-right': '-top-20 -right-20',
        'bottom-left': '-bottom-20 -left-20',
        'bottom-right': '-bottom-20 -right-20',
        'center-left': 'top-1/2 -translate-y-1/2 -left-20',
        'center-right': 'top-1/2 -translate-y-1/2 -right-20',
    };

    const sizeStyles = {
        sm: 'w-40 h-40 blur-2xl',
        md: 'w-64 h-64 blur-3xl',
        lg: 'w-80 h-80 blur-3xl',
        xl: 'w-96 h-96 blur-3xl',
    };

    return (
        <div
            className={`absolute ${positionStyles[position]} ${sizeStyles[size]} bg-gradient-to-br ${colors} rounded-full ${className}`}
            aria-hidden="true"
        />
    );
};
