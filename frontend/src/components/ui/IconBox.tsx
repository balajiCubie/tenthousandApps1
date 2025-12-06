import React from 'react';

/**
 * Predefined gradient color combinations for IconBox.
 * These follow the AWS-style color palette.
 */
export const iconGradients = {
    blue: 'from-blue-500 to-cyan-500',
    purple: 'from-purple-500 to-pink-500',
    green: 'from-green-500 to-emerald-500',
    orange: 'from-orange-500 to-amber-500',
    pink: 'from-pink-500 to-rose-500',
    teal: 'from-teal-500 to-cyan-500',
    indigo: 'from-purple-500 to-indigo-500',
    yellow: 'from-yellow-500 to-orange-500',
} as const;

export type IconGradient = keyof typeof iconGradients | string;

export interface IconBoxProps {
    /** The icon component to render */
    icon: React.ComponentType<{ className?: string }>;
    /** Gradient colors - can be a preset key or custom Tailwind gradient classes */
    gradient?: IconGradient;
    /** Size variant for the box */
    size?: 'sm' | 'md' | 'lg';
    /** Additional CSS classes for the container */
    className?: string;
}

/**
 * IconBox - A container component for icons with gradient backgrounds.
 * 
 * Renders an icon inside a rounded box with a gradient background.
 * Used extensively in feature cards, stat displays, and navigation.
 * 
 * @example
 * <IconBox icon={ClockIcon} gradient="blue" size="md" />
 * 
 * @example
 * // With custom gradient
 * <IconBox icon={HeartIcon} gradient="from-red-500 to-pink-500" />
 */
export const IconBox: React.FC<IconBoxProps> = ({
    icon: Icon,
    gradient = 'blue',
    size = 'md',
    className = '',
}) => {
    // Resolve gradient - use preset if available, otherwise use as custom classes
    const gradientClasses = gradient in iconGradients
        ? iconGradients[gradient as keyof typeof iconGradients]
        : gradient;

    const sizeStyles = {
        sm: { box: 'w-10 h-10 rounded-lg', icon: 'w-5 h-5' },
        md: { box: 'w-12 h-12 rounded-lg', icon: 'w-6 h-6' },
        lg: { box: 'w-14 h-14 rounded-xl', icon: 'w-7 h-7' },
    };

    return (
        <div
            className={`${sizeStyles[size].box} bg-gradient-to-br ${gradientClasses} flex items-center justify-center flex-shrink-0 ${className}`}
        >
            <Icon className={`${sizeStyles[size].icon} text-white`} />
        </div>
    );
};
