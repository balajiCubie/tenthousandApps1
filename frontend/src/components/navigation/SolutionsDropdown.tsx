'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { solutionsData } from '@/data/navigationData';
import { ChevronDown } from 'lucide-react';

export const SolutionsDropdown = () => {
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
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute left-0 top-full mt-2 w-96 z-50">
                    <div className="bg-white dark:bg-gray-900 border border-gray-200/60 dark:border-gray-700 rounded-lg shadow-xl overflow-hidden">
                        <div className="p-4">
                            {solutionsData.map((category, idx) => (
                                <div key={category.id} className={idx > 0 ? 'mt-4 pt-4 border-t border-gray-200 dark:border-gray-700' : ''}>
                                    <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                        {category.title}
                                    </h3>
                                    <div className="space-y-1">
                                        {category.items.map((item) => (
                                            <Link
                                                key={item.id}
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="block px-3 py-2 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                                            >
                                                <div className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                                    {item.title}
                                                </div>
                                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                                    {item.description}
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <Link
                                    href="/solutions"
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                                >
                                    View all solutions →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
