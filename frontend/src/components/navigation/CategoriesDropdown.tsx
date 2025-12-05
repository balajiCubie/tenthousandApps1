'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { quickCategories } from '@/data/navigationData';
import { ChevronDown } from 'lucide-react';

export const CategoriesDropdown = () => {
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
                Categories
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute left-0 top-full mt-2 w-72 z-50">
                    <div className="bg-white dark:bg-gray-900 border border-gray-200/60 dark:border-gray-700 rounded-lg shadow-xl overflow-hidden">
                        <div className="p-3">
                            <div className="space-y-1">
                                {quickCategories.map((category) => (
                                    <Link
                                        key={category.id}
                                        href={category.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-between px-3 py-2 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                                    >
                                        <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                            {category.name}
                                        </span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">
                                            {category.count}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
