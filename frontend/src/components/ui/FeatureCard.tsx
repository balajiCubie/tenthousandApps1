import React from 'react';
import { Card } from './Card';
import { IconBox, IconGradient } from './IconBox';
import { ArrowRightIcon } from '../icons';

export interface FeatureCardProps {
    /** Icon component to display */
    icon: React.ComponentType<{ className?: string }>;
    /** Card title */
    title: string;
    /** Card description */
    description: string;
    /** Optional link URL */
    href?: string;
    /** Gradient for the icon background */
    gradient?: IconGradient;
    /** Text for the link (defaults to "Learn more") */
    linkText?: string;
    /** Additional CSS classes */
    className?: string;
    /** Click handler (alternative to href) */
    onClick?: () => void;
}

/**
 * FeatureCard - A card component for displaying features, categories, or actions.
 * 
 * Combines an icon with gradient background, title, description, and optional
 * link with arrow. Features hover effects and smooth transitions.
 * 
 * @example
 * <FeatureCard
 *   icon={ClockIcon}
 *   title="Time Calculators"
 *   description="Duration, age, date calculations and more"
 *   gradient="blue"
 *   href="/calculators/time"
 * />
 */
export const FeatureCard: React.FC<FeatureCardProps> = ({
    icon,
    title,
    description,
    href,
    gradient = 'blue',
    linkText = 'Learn more',
    className = '',
    onClick,
}) => {
    const LinkContent = () => (
        <div className="flex items-center text-[#0972d3] text-sm font-medium group-hover:translate-x-1 transition-transform">
            {linkText}
            <ArrowRightIcon className="w-4 h-4 ml-1" />
        </div>
    );

    return (
        <Card hover className={`group ${className}`}>
            <div className="flex items-start space-x-4">
                <IconBox icon={icon} gradient={gradient} size="md" />
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#0972d3] transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                        {description}
                    </p>
                    {(href || onClick) && (
                        href ? (
                            <a href={href}>
                                <LinkContent />
                            </a>
                        ) : (
                            <button onClick={onClick} className="cursor-pointer">
                                <LinkContent />
                            </button>
                        )
                    )}
                </div>
            </div>
        </Card>
    );
};
