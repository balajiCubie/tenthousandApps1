import { SparklesIcon, CodeIcon, BookIcon } from '@/components/icons';
import { IconGradient } from '@/components/ui/IconBox';

/**
 * Get Started card data.
 */
export interface GetStartedCard {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    href: string;
    gradient: IconGradient;
}

export const getStartedCards: GetStartedCard[] = [
    {
        icon: SparklesIcon,
        title: 'Start Using Calculators',
        description: 'Browse our collection of 100+ calculators and start calculating instantly. No sign-up required.',
        href: '#calculators',
        gradient: 'blue',
    },
    {
        icon: CodeIcon,
        title: 'Explore Developer API',
        description: 'Integrate our powerful calculation engines into your applications with our RESTful API.',
        href: '#api',
        gradient: 'purple',
    },
    {
        icon: BookIcon,
        title: 'Read Documentation',
        description: 'Learn how to make the most of our platform with comprehensive guides and tutorials.',
        href: '#docs',
        gradient: 'green',
    },
];
