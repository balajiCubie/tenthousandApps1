'use client';

import React from 'react';
import Link from 'next/link';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
import { productSuites, solutionsData, quickCategories, developerLinks } from '@/data/navigationData';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    const [expandedSection, setExpandedSection] = React.useState<string | null>(null);

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                onClick={onClose}
            />

            {/* Sidebar */}
            <div className="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white dark:bg-gray-900 z-50 lg:hidden overflow-y-auto shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">CC</span>
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-white">Calculator Cloud</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                        aria-label="Close menu"
                    >
                        <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </button>
                </div>

                {/* Menu Content */}
                <div className="px-2 py-4 space-y-2">
                    {/* Products Section */}
                    <div className="space-y-1">
                        <button
                            onClick={() => toggleSection('products')}
                            className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                        >
                            <span>Products</span>
                            {expandedSection === 'products' ? (
                                <ChevronDown className="w-4 h-4" />
                            ) : (
                                <ChevronRight className="w-4 h-4" />
                            )}
                        </button>

                        {expandedSection === 'products' && (
                            <div className="pl-4 space-y-2 mt-2">
                                {productSuites.map((suite) => (
                                    <div key={suite.id} className="space-y-1">
                                        <div className="px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400">
                                            {suite.name}
                                        </div>
                                        {suite.calculators.slice(0, 3).map((calc) => (
                                            <Link
                                                key={calc.id}
                                                href={calc.href}
                                                onClick={onClose}
                                                className="block px-3 py-1.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                                            >
                                                {calc.name}
                                            </Link>
                                        ))}
                                    </div>
                                ))}
                                <Link
                                    href="/calculators"
                                    onClick={onClose}
                                    className="block px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md mt-2"
                                >
                                    View All Calculators →
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Solutions Section */}
                    <div className="space-y-1">
                        <button
                            onClick={() => toggleSection('solutions')}
                            className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                        >
                            <span>Solutions</span>
                            {expandedSection === 'solutions' ? (
                                <ChevronDown className="w-4 h-4" />
                            ) : (
                                <ChevronRight className="w-4 h-4" />
                            )}
                        </button>

                        {expandedSection === 'solutions' && (
                            <div className="pl-4 space-y-1 mt-2">
                                {solutionsData.map((category) => (
                                    <div key={category.id} className="space-y-1">
                                        <div className="px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400">
                                            {category.title}
                                        </div>
                                        {category.items.map((item) => (
                                            <Link
                                                key={item.id}
                                                href={item.href}
                                                onClick={onClose}
                                                className="block px-3 py-1.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                                            >
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Categories Section */}
                    <div className="space-y-1">
                        <button
                            onClick={() => toggleSection('categories')}
                            className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                        >
                            <span>Categories</span>
                            {expandedSection === 'categories' ? (
                                <ChevronDown className="w-4 h-4" />
                            ) : (
                                <ChevronRight className="w-4 h-4" />
                            )}
                        </button>

                        {expandedSection === 'categories' && (
                            <div className="pl-4 space-y-1 mt-2">
                                {quickCategories.map((category) => (
                                    <Link
                                        key={category.id}
                                        href={category.href}
                                        onClick={onClose}
                                        className="flex items-center justify-between px-3 py-1.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                                    >
                                        <span>{category.name}</span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">
                                            {category.count}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200 dark:border-gray-700 my-4" />

                    {/* Developer Links */}
                    <div className="space-y-1">
                        <div className="px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Developer
                        </div>
                        {developerLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={onClose}
                                className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
