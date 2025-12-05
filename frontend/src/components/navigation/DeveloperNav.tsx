'use client';

import React from 'react';
import Link from 'next/link';
import { developerLinks } from '@/data/navigationData';

export const DeveloperNav = () => {
    return (
        <div className="hidden lg:flex items-center gap-1">
            {developerLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
};
