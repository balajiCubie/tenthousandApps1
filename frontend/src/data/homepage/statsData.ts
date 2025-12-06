import {
    LightningIcon,
    ChartIcon,
    GlobeIcon,
    CheckIcon,
} from '@/components/icons';
import { IconGradient } from '@/components/ui/IconBox';

/**
 * Stat item for hero section and performance stats.
 */
export interface HeroStat {
    value: string;
    label: string;
    gradient: string;
}

export interface PerformanceStat {
    icon: React.ComponentType<{ className?: string }>;
    value: string;
    label: string;
    description: string;
    gradient: string;
    iconGradient: IconGradient;
}

/**
 * Hero section stats - shown at the bottom of the hero.
 */
export const heroStats: HeroStat[] = [
    { value: '100+', label: 'Calculators', gradient: 'from-blue-500 to-cyan-500' },
    { value: '50K+', label: 'Users', gradient: 'from-purple-500 to-pink-500' },
    { value: '1M+', label: 'Calculations/mo', gradient: 'from-green-500 to-emerald-500' },
    { value: '99.9%', label: 'Accuracy', gradient: 'from-orange-500 to-amber-500' },
];

/**
 * Feature pills shown in the hero section.
 */
export const heroFeaturePills = [
    'Time Calculators',
    'Fitness Tools',
    'Financial Analysis',
    'Converters',
    'Custom Tools',
];

/**
 * Performance stats for the dedicated performance section.
 */
export const performanceStats: PerformanceStat[] = [
    {
        icon: LightningIcon,
        value: '10×',
        label: 'Faster Calculations',
        description: 'Compared to traditional methods',
        gradient: 'from-yellow-500 to-orange-500',
        iconGradient: 'yellow',
    },
    {
        icon: ChartIcon,
        value: '1M+',
        label: 'Calculations Per Month',
        description: 'Trusted by users worldwide',
        gradient: 'from-blue-500 to-cyan-500',
        iconGradient: 'blue',
    },
    {
        icon: GlobeIcon,
        value: '100+',
        label: 'Categories Supported',
        description: 'Covering every calculation need',
        gradient: 'from-purple-500 to-pink-500',
        iconGradient: 'purple',
    },
    {
        icon: CheckIcon,
        value: '99.9%',
        label: 'Enterprise-Grade Accuracy',
        description: 'Validated and tested',
        gradient: 'from-green-500 to-teal-500',
        iconGradient: 'green',
    },
];
