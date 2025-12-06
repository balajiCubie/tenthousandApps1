import React from 'react';
import { Section, SectionHeader, FeatureCard } from '@/components/ui';
import { getStartedCards } from '@/data/homepage';

/**
 * GetStartedCards - Call-to-action cards for getting started with the platform.
 * 
 * Refactored to use reusable UI components and externalized data.
 */
export const GetStartedCards = () => {
    return (
        <Section background="white">
            <SectionHeader
                title="Get Started Today"
                subtitle="Choose your path and start your journey with us"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {getStartedCards.map((card) => (
                    <FeatureCard
                        key={card.title}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                        gradient={card.gradient}
                        href={card.href}
                    />
                ))}
            </div>
        </Section>
    );
};
