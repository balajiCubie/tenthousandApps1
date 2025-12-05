import React from 'react';
import { Container } from '../ui/Container';
import { CheckIcon, LightningIcon, SparklesIcon } from '../icons';

export const Overview = () => {
    const features = [
        { icon: CheckIcon, text: 'Accurate & Reliable Results', gradient: 'from-green-500 to-emerald-500' },
        { icon: LightningIcon, text: 'Lightning-Fast Performance', gradient: 'from-blue-500 to-cyan-500' },
        { icon: SparklesIcon, text: 'Modern, Intuitive UI', gradient: 'from-purple-500 to-pink-500' },
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50/50">
            <Container>
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main Description */}
                    <p className="text-xl text-gray-700 leading-relaxed mb-12 font-medium">
                        Our platform brings together the most comprehensive collection of calculators and conversion tools,
                        designed for professionals, students, and anyone who needs accurate, instant results.
                        <span className="block mt-4 text-gray-600">
                            Cloud-powered and built with modern technology for exceptional speed and reliability.
                        </span>
                    </p>

                    {/* Feature Points */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="glass-strong p-6 rounded-2xl hover:scale-105 transition-all group"
                            >
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <p className="text-base font-semibold text-gray-900">{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};
