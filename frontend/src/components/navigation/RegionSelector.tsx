'use client';

import React, { useState, useRef, useEffect } from 'react';
import { regions } from '@/data/navigationData';
import { Globe, Check, ChevronDown } from 'lucide-react';

export const RegionSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState(regions[0]);
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

    const handleRegionChange = (region: typeof regions[0]) => {
        setSelectedRegion(region);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <Globe className="w-4 h-4" />
                <span className="hidden md:inline">{selectedRegion.code}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 z-50">
                    <div className="bg-white dark:bg-gray-900 border border-gray-200/60 dark:border-gray-700 rounded-lg shadow-xl overflow-hidden">
                        <div className="p-2">
                            <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Select Region
                            </div>
                            <div className="space-y-1">
                                {regions.map((region) => (
                                    <button
                                        key={region.id}
                                        onClick={() => handleRegionChange(region)}
                                        className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg">{region.iconFlag}</span>
                                            <div className="text-left">
                                                <div className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                                    {region.name}
                                                </div>
                                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                                    {region.code}
                                                </div>
                                            </div>
                                        </div>
                                        {selectedRegion.id === region.id && (
                                            <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
