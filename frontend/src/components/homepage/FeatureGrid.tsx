import React from 'react';
import { Section, SectionHeader, FeatureCard } from '@/components/ui';
import { featureCategories } from '@/data/homepage';

/**
 * FeatureGrid - Displays calculator category cards in a responsive grid.
 * 
 * Refactored to use reusable UI components and externalized data.
 */
export const FeatureGrid = () => {
    return (
        <Section background="gray">
            <SectionHeader
                title="Explore Calculator Categories"
                subtitle="Choose from our extensive collection of specialized calculators and tools"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featureCategories.map((category) => (
                    <FeatureCard
                        key={category.title}
                        icon={category.icon}
                        title={category.title}
                        description={category.description}
                        gradient={category.gradient}
                        href={category.href}
                        linkText="Explore"
                    />
                ))}
            </div>
        </Section>
    );
};
