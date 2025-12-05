"use client";
import React, { useEffect, useState } from 'react';
import { NavItem } from '@/types/navigation';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface SecondaryNavProps {
    title: string;
    items: NavItem[];
}

const SecondaryNav: React.FC<SecondaryNavProps> = ({ title, items }) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // 40 (Utility) + 64 (Primary) = 104px
            // But we want it to shadow only when it hits top, logic primarily depends on structure.
            // Usually AWS secondary nav becomes sticky when it hits the top of viewport.
            // If utility nav is visible, offset is different.
            const offset = window.scrollY;
            setIsSticky(offset > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`
        w-full bg-white transition-all duration-300 z-30
        ${isSticky ? 'sticky top-0 shadow-md' : 'relative border-b border-gray-200'}
      `}
        >
            {/* Background Gradient matching AWS "soft yellow" hint often seen in sub-pages or just white */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 to-white pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-6 relative">
                <div className="flex items-center justify-center h-[56px] lg:h-[60px]">

                    {/* Title */}
                    <div className="font-bold text-[#232f3e] text-[16px] lg:text-[18px] mr-8 whitespace-nowrap">
                        {title}
                    </div>

                    {/* Links - Scrollable on mobile */}
                    <div className="overflow-x-auto no-scrollbar">
                        <div className="flex items-center space-x-6 lg:space-x-8 min-w-max">
                            {items.map((item, idx) => (
                                <div key={idx} className="group relative flex items-center cursor-pointer h-[56px] lg:h-[60px]">
                                    <Link
                                        href={item.href}
                                        className="text-[#545b64] text-[14px] font-medium hover:text-[#ec7211] transition-colors flex items-center"
                                    >
                                        {item.label}
                                        {item.type === 'dropdown' && (
                                            <ChevronDown className="w-3.5 h-3.5 ml-1 opacity-70 group-hover:opacity-100 transition-transform duration-200 group-hover:rotate-180" />
                                        )}
                                    </Link>
                                    {/* Active Indicator (optional, logic needed for current page) */}
                                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-transparent group-hover:bg-[#ec7211]/80 transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SecondaryNav;
