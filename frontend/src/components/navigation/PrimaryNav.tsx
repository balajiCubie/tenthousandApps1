"use client";

import React, { useState } from 'react';
import { NavItem } from '@/types/navigation';
import { ChevronDown, Search } from 'lucide-react';
import Link from 'next/link';

interface PrimaryNavProps {
    leftItems: NavItem[];
    rightItems: NavItem[];
}

const PrimaryNav: React.FC<PrimaryNavProps> = ({ leftItems, rightItems }) => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    return (
        <div className="w-full bg-white text-[#232f3e] relative z-40 shadow-sm border-b border-gray-100">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="flex items-center justify-between h-[64px]">

                    {/* Logo & Main Nav */}
                    <div className="flex items-center h-full">
                        {/* Logo Placeholder */}
                        <Link href="/" className="flex items-center mr-10 relative top-[-1px]">
                            <div className="w-[45px] h-[30px] bg-[#232f3e] rounded flex items-center justify-center text-white text-xs font-bold shadow-sm">
                                CC
                            </div>
                            <span className="ml-2.5 text-lg font-bold tracking-tight text-[#232f3e]">
                                Calculator Cloud
                            </span>
                        </Link>

                        {/* Nav Items */}
                        <nav className="hidden lg:flex items-center space-x-1 h-full">
                            {leftItems.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`
                    h-full flex items-center px-4 cursor-pointer text-[15px] font-medium transition-colors
                    ${activeMenu === item.label ? 'text-[#ec7211]' : 'text-[#232f3e] hover:text-[#ec7211]'}
                    border-b-2 ${activeMenu === item.label ? 'border-[#ec7211]' : 'border-transparent'}
                  `}
                                    onMouseEnter={() => item.type === 'mega' || item.type === 'dropdown' ? setActiveMenu(item.label) : setActiveMenu(null)}
                                    onMouseLeave={() => setActiveMenu(null)}
                                >
                                    <span>{item.label}</span>
                                    {(item.type === 'mega' || item.type === 'dropdown') && (
                                        <ChevronDown className={`w-4 h-4 ml-1.5 transition-transform duration-200 ${activeMenu === item.label ? 'rotate-180' : ''}`} />
                                    )}

                                    {/* Mega Menu Overlay Block - Simplified for now */}
                                    {item.type === 'mega' && activeMenu === item.label && (
                                        <div className="absolute top-[64px] left-0 w-full bg-white shadow-xl border-t border-gray-100 py-8 px-6 animate-in fade-in slide-in-from-top-1 duration-200 z-50">
                                            <div className="container mx-auto grid grid-cols-12 gap-8">
                                                {/* Sidebar */}
                                                <div className="col-span-3 border-r border-gray-100 pr-6">
                                                    <h3 className="text-[#ec7211] font-bold text-sm mb-4 uppercase tracking-wider">Featured</h3>
                                                    <ul className="space-y-3">
                                                        {item.sections?.[0]?.items.map((sub, i) => (
                                                            <li key={i} className="hover:text-[#ec7211] cursor-pointer text-sm font-medium">{sub.label}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                {/* Main Content */}
                                                <div className="col-span-9 grid grid-cols-3 gap-6">
                                                    {item.sections?.slice(1).map((sec, i) => (
                                                        <div key={i}>
                                                            <h3 className="font-bold text-[#232f3e] mb-4 text-sm border-b pb-2">{sec.title}</h3>
                                                            <ul className="space-y-3">
                                                                {sec.items.map((sub, j) => (
                                                                    <li key={j} className="text-sm text-gray-600 hover:text-[#ec7211] cursor-pointer">
                                                                        {sub.label}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center text-[#232f3e] hover:text-[#ec7211] cursor-pointer transition-colors">
                            <Search className="w-5 h-5 mr-2" />
                            <span className="text-[15px] font-medium hidden sm:block">Search</span>
                        </div>

                        <Link
                            href="#"
                            className="text-[14px] font-bold text-[#232f3e] hover:text-[#ec7211] hover:underline"
                        >
                            Sign In to Console
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PrimaryNav;
