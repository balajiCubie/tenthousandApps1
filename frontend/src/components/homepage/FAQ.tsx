import React from 'react';
import { Section, SectionHeader } from '@/components/ui';
import { faqItems } from '@/data/homepage';

/**
 * FAQ - Frequently Asked Questions section.
 * 
 * Uses a simple list format rather than accordion for quick scanning.
 * Data is externalized to accordionData.ts.
 */
export const FAQ = () => {
    return (
        <Section background="white">
            <div className="max-w-3xl mx-auto">
                <SectionHeader
                    title="Frequently Asked Questions"
                    centered={true}
                />

                <div className="space-y-6">
                    {faqItems.map((faq) => (
                        <div
                            key={faq.id}
                            className="border-b border-gray-200 pb-6 last:border-b-0"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                {faq.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {faq.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
