import React from 'react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import {
    ClockIcon,
    HeartIcon,
    CurrencyIcon,
    RefreshIcon,
    BeakerIcon,
    AdjustmentsIcon,
    ArrowRightIcon
} from '../icons';

export const FeatureGrid = () => {
    const categories = [
        {
            icon: ClockIcon,
            title: 'Time Calculators',
            description: 'Duration, age, date calculations and more',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: HeartIcon,
            title: 'Fitness Calculators',
            description: 'BMI, calorie tracking, workout metrics',
            color: 'from-pink-500 to-rose-500'
        },
        {
            icon: CurrencyIcon,
            title: 'Finance Calculators',
            description: 'Interest, loans, investments, tax planning',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: RefreshIcon,
            title: 'Conversion Tools',
            description: 'Units, currencies, measurements',
            color: 'from-purple-500 to-indigo-500'
        },
        {
            icon: BeakerIcon,
            title: 'Scientific Calculators',
            description: 'Math, physics, chemistry equations',
            color: 'from-orange-500 to-amber-500'
        },
        {
            icon: AdjustmentsIcon,
            title: 'Custom & Advanced Tools',
            description: 'API access, custom formulas, integrations',
            color: 'from-teal-500 to-cyan-500'
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Explore Calculator Categories
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose from our extensive collection of specialized calculators and tools
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <Card key={category.title} hover className="group">
                            <div className="flex items-start space-x-4">
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0`}>
                                    <category.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#0972d3] transition-colors">
                                        {category.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-3">
                                        {category.description}
                                    </p>
                                    <div className="flex items-center text-[#0972d3] text-sm font-medium group-hover:translate-x-1 transition-transform">
                                        Explore
                                        <ArrowRightIcon className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
};
