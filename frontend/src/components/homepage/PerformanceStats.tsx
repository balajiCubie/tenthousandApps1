import React from 'react';
import { Container } from '../ui/Container';
import { LightningIcon, ChartIcon, GlobeIcon, CheckIcon } from '../icons';

export const PerformanceStats = () => {
    const stats = [
        {
            icon: LightningIcon,
            value: '10×',
            label: 'Faster Calculations',
            description: 'Compared to traditional methods',
            gradient: 'from-yellow-500 to-orange-500'
        },
        {
            icon: ChartIcon,
            value: '1M+',
            label: 'Calculations Per Month',
            description: 'Trusted by users worldwide',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            icon: GlobeIcon,
            value: '100+',
            label: 'Categories Supported',
            description: 'Covering every calculation need',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            icon: CheckIcon,
            value: '99.9%',
            label: 'Enterprise-Grade Accuracy',
            description: 'Validated and tested',
            gradient: 'from-green-500 to-teal-500'
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-3xl"></div>

            <Container className="relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Performance That Powers Productivity
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Built for speed, accuracy, and scale
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="glass-strong rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
                        >
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <stat.icon className="w-7 h-7 text-white" />
                            </div>

                            <div className="text-4xl font-bold text-gray-900 mb-2">
                                {stat.value}
                            </div>

                            <div className="text-lg font-semibold text-gray-800 mb-2">
                                {stat.label}
                            </div>

                            <div className="text-sm text-gray-600">
                                {stat.description}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
