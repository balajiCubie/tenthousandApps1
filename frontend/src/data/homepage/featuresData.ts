import {
    ClockIcon,
    HeartIcon,
    CurrencyIcon,
    RefreshIcon,
    BeakerIcon,
    AdjustmentsIcon,
} from '@/components/icons';
import { IconGradient } from '@/components/ui/IconBox';

/**
 * Feature category data for the FeatureGrid component.
 * Each category represents a major calculator grouping.
 */
export interface FeatureCategory {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    gradient: IconGradient;
    href?: string;
}

export const featureCategories: FeatureCategory[] = [
    {
        icon: ClockIcon,
        title: 'Time Calculators',
        description: 'Duration, age, date calculations and more',
        gradient: 'blue',
        href: '/categories/time',
    },
    {
        icon: HeartIcon,
        title: 'Fitness Calculators',
        description: 'BMI, calorie tracking, workout metrics',
        gradient: 'pink',
        href: '/categories/fitness',
    },
    {
        icon: CurrencyIcon,
        title: 'Finance Calculators',
        description: 'Interest, loans, investments, tax planning',
        gradient: 'green',
        href: '/categories/finance',
    },
    {
        icon: RefreshIcon,
        title: 'Conversion Tools',
        description: 'Units, currencies, measurements',
        gradient: 'indigo',
        href: '/categories/converters',
    },
    {
        icon: BeakerIcon,
        title: 'Scientific Calculators',
        description: 'Math, physics, chemistry equations',
        gradient: 'orange',
        href: '/categories/science',
    },
    {
        icon: AdjustmentsIcon,
        title: 'Custom & Advanced Tools',
        description: 'API access, custom formulas, integrations',
        gradient: 'teal',
        href: '/categories/advanced',
    },
];
