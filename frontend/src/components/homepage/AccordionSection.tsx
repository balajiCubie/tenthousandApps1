'use client';

import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { ChevronDownIcon } from '../icons';

export const AccordionSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const items = [
        {
            title: 'Accuracy & Reliability',
            content: 'Our calculators are built on proven formulas and algorithms, tested extensively to ensure precision. We validate every calculation against industry standards and scientific principles, giving you confidence in every result.'
        },
        {
            title: 'Speed & Cloud Optimization',
            content: 'Experience instant results with our cloud-powered infrastructure. Calculations happen in milliseconds, whether you\'re performing simple conversions or complex scientific computations. Our globally distributed servers ensure fast access from anywhere.'
        },
        {
            title: '100+ Calculator Categories',
            content: 'From basic arithmetic to advanced financial modeling, we cover every calculation need. Our platform includes time & date calculators, fitness & health tools, financial analyzers, unit converters, scientific calculators, and custom tools for specialized industries.'
        },
        {
            title: 'Developer API Access',
            content: 'Integrate our calculation engines into your applications with our robust RESTful API. Access all calculator functions programmatically, with comprehensive documentation, code examples in multiple languages, and dedicated support for enterprise users.'
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <Container>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
                        Why Choose Our Calculator Platform?
                    </h2>

                    <div className="space-y-4">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden transition-all duration-200"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="text-lg font-semibold text-gray-900">{item.title}</span>
                                    <ChevronDownIcon
                                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                        }`}
                                >
                                    <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};
