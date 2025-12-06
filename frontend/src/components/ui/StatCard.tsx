import React from 'react';
import { IconBox, IconGradient } from './IconBox';

export interface StatCardProps {
    /** The main statistic value (e.g., "100+", "99.9%") */
    value: string;
    /** Label describing the statistic */
    label: string;
    /** Optional description text */
    description?: string;
    /** Gradient for the value text */
    gradient?: string;
    /** Optional icon component */
    icon?: React.ComponentType<{ className?: string }>;
    /** Icon gradient (if icon is provided) */
    iconGradient?: IconGradient;
    /** Additional CSS classes */
    className?: string;
}

/**
 * StatCard - A card component for displaying statistics and metrics.
 * 
 * Features glassmorphism styling with optional icon, gradient text,
 * and hover effects. Used in hero sections and performance displays.
 * 
 * @example
 * <StatCard 
 *   value="100+" 
 *   label="Calculators"
 *   description="Available tools"
 *   gradient="from-blue-500 to-cyan-500"
 * />
 * 
 * @example
 * // With icon
 * <StatCard 
 *   icon={LightningIcon}
 *   iconGradient="yellow"
 *   value="10×" 
 *   label="Faster Calculations"
 * />
 */
export const StatCard: React.FC<StatCardProps> = ({
    value,
    label,
    description,
    gradient = 'from-blue-500 to-cyan-500',
    icon,
    iconGradient,
    className = '',
}) => {
    return (
        <div
            className={`glass-strong rounded-2xl p-6 hover:scale-105 transition-all duration-300 group ${className}`}
        >
            {/* Optional Icon */}
            {icon && (
                <div className="mb-4 group-hover:scale-110 transition-transform">
                    <IconBox icon={icon} gradient={iconGradient} size="lg" />
                </div>
            )}

            {/* Value with gradient text */}
            <div className={`text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}>
                {value}
            </div>

            {/* Label */}
            <div className="text-lg font-semibold text-gray-800 mb-1">
                {label}
            </div>

            {/* Optional Description */}
            {description && (
                <div className="text-sm text-gray-600">
                    {description}
                </div>
            )}
        </div>
    );
};
