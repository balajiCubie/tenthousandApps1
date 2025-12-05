import React from 'react';
import { Container } from '../ui/Container';

export const ServicesTable = () => {
    const services = [
        {
            category: 'Time & Date',
            description: 'Convert and compute durations, ages, and time zones',
            tools: 'Time calculator, Age calculator, Date difference, Time zone converter'
        },
        {
            category: 'Finance',
            description: 'Interest, tax, EMI, and investment calculations',
            tools: 'Loan calculator, ROI calculator, CAGR, Tax calculator, EMI calculator'
        },
        {
            category: 'Science',
            description: 'Equations, conversions, and real-time graphs',
            tools: 'Scientific calculator, Unit converter, Physics formulas, Chemistry tools'
        },
        {
            category: 'Health & Fitness',
            description: 'Track your health metrics and fitness goals',
            tools: 'BMI calculator, Calorie counter, Pace calculator, Macro calculator'
        },
        {
            category: 'Conversion',
            description: 'Convert between units, currencies, and measurements',
            tools: 'Currency converter, Length converter, Weight converter, Temperature'
        },
    ];

    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="mb-12 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Our Calculator Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A comprehensive overview of our calculator categories and tools
                    </p>
                </div>

                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b-2 border-gray-200">
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Category</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Description</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tools Included</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {services.map((service, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{service.category}</td>
                                    <td className="px-6 py-4 text-gray-600">{service.description}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{service.tools}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-4">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.category}</h3>
                            <p className="text-gray-600 mb-3">{service.description}</p>
                            <div className="text-sm text-gray-500">
                                <span className="font-medium">Tools: </span>
                                {service.tools}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
