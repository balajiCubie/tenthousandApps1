import React from 'react';
import { Section, SectionHeader, StatCard } from '@/components/ui';
import { performanceStats } from '@/data/homepage';

/**
 * PerformanceStats - Performance metrics display section.
 * 
 * Refactored to use reusable UI components and externalized data.
 */
export const PerformanceStats = () => {
    return (
        <Section background="gradient" decorators>
            <SectionHeader
                title="Performance That Powers Productivity"
                subtitle="Built for speed, accuracy, and scale"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {performanceStats.map((stat) => (
                    <StatCard
                        key={stat.label}
                        icon={stat.icon}
                        iconGradient={stat.iconGradient}
                        value={stat.value}
                        label={stat.label}
                        description={stat.description}
                        gradient={stat.gradient}
                    />
                ))}
            </div>
        </Section>
    );
};
