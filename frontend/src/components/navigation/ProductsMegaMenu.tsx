'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { productSuites } from '@/data/navigationData';
import { ChevronDown } from 'lucide-react';

export const ProductsMegaMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="relative" ref={menuRef}>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Mega Menu Panel */}
            {isOpen && (
                <div className="absolute left-0 top-full mt-2 w-screen max-w-6xl -translate-x-1/4 z-50">
                    <div className="bg-white dark:bg-gray-900 border border-gray-200/60 dark:border-gray-700 rounded-lg shadow-xl overflow-hidden">
                        <div className="p-6">
                            {/* Grid of Product Suites */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {productSuites.map((suite) => (
                                    <div key={suite.id} className="space-y-3">
                                        {/* Suite Header */}
                                        <div className="border-b border-gray-200 dark:border-gray-700 pb-2">
                                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                                                {suite.name}
                                            </h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                {suite.description}
                                            </p>
                                        </div>

                                        {/* Calculator Items */}
                                        <div className="space-y-1">
                                            {suite.calculators.slice(0, 5).map((calc) => (
                                                <Link
                                                    key={calc.id}
                                                    href={calc.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block px-3 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors group"
                                                >
                                                    <div className="font-medium">{calc.name}</div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300">
                                                        {calc.description}
                                                    </div>
                                                </Link>
                                            ))}

                                            {/* View All Link */}
                                            {suite.calculators.length > 5 && (
                                                <Link
                                                    href={`/calculators/${suite.id}`}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                                                >
                                                    View all {suite.calculators.length} calculators →
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Footer CTA */}
                            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Explore our complete collection of professional calculators
                                    </p>
                                    <Link
                                        href="/calculators"
                                        onClick={() => setIsOpen(false)}
                                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
                                    >
                                        Browse All Tools
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
