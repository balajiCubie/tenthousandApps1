import React from 'react';
import { Section, SectionHeader } from '@/components/ui';
import { services } from '@/data/homepage';

/**
 * ServicesTable - Responsive table showing calculator services overview.
 * 
 * Features both a desktop table view and mobile card view.
 * Data is externalized to servicesData.ts.
 */
export const ServicesTable = () => {
    return (
        <Section background="white">
            <SectionHeader
                title="Our Calculator Services"
                subtitle="A comprehensive overview of our calculator categories and tools"
            />

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b-2 border-gray-200">
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                                Category
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                                Description
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                                Tools Included
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {services.map((service, index) => (
                            <tr key={index} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {service.category}
                                </td>
                                <td className="px-6 py-4 text-gray-600">
                                    {service.description}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">
                                    {service.tools}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
                    >
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {service.category}
                        </h3>
                        <p className="text-gray-600 mb-3">{service.description}</p>
                        <div className="text-sm text-gray-500">
                            <span className="font-medium">Tools: </span>
                            {service.tools}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
