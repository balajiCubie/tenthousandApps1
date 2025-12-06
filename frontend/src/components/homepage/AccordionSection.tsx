import React from 'react';
import { Section, SectionHeader, Accordion } from '@/components/ui';
import { whyChooseUsItems } from '@/data/homepage';

/**
 * AccordionSection - "Why Choose Us" expandable content section.
 * 
 * Refactored to use reusable Accordion component and externalized data.
 */
export const AccordionSection = () => {
    return (
        <Section background="gray">
            <div className="max-w-3xl mx-auto">
                <SectionHeader
                    title="Why Choose Our Calculator Platform?"
                    centered={true}
                />

                <Accordion items={whyChooseUsItems} defaultOpen={0} />
            </div>
        </Section>
    );
};
