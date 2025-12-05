"use client";
import React, { useState } from 'react';
import { NavItem, NavigationConfig } from '@/types/navigation';
import { X, ChevronRight, ChevronLeft, Menu } from 'lucide-react';
import Link from 'next/link';

interface MobileNavProps {
    config: NavigationConfig;
}

const MobileNav: React.FC<MobileNavProps> = ({ config }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [menuStack, setMenuStack] = useState<NavItem[]>([]); // For tracking drill-down level

    // Flatten primary and utility for mobile view if needed, 
    // but mostly we just show primary + account stuff.
    const rootItems = [
        ...config.primaryNav.left,
        { label: 'My Account', href: '#', type: 'dropdown' as const, children: config.utilityNav.left.find(i => i.label === 'My Account')?.children || [] }
    ];

    const currentLevelItems = menuStack.length === 0 ? rootItems : (menuStack[menuStack.length - 1].children || menuStack[menuStack.length - 1].sections?.flatMap(s => s.items) || []);
    const currentTitle = menuStack.length === 0 ? 'Menu' : menuStack[menuStack.length - 1].label;

    const handlePush = (item: NavItem) => {
        if (item.children || item.sections) {
            setMenuStack([...menuStack, item]);
        }
    };

    const handlePop = () => {
        setMenuStack(menuStack.slice(0, -1));
    };

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        setMenuStack([]); // Reset on close
    };

    return (
        <div className="lg:hidden">
            {/* Hamburger Trigger */}
            <button
                onClick={toggleOpen}
                className="p-2 text-[#232f3e] hover:text-[#ec7211] transition-colors"
                aria-label="Open Menu"
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 transition-opacity" onClick={toggleOpen} />
            )}

            {/* Drawer */}
            <div
                className={`fixed top-0 left-0 bottom-0 w-[80%] max-w-[320px] bg-white z-50 transform transition-transform duration-300 shadow-2xl ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {/* Header */}
                <div className="bg-[#232f3e] text-white p-4 flex items-center justify-between h-[50px]">
                    <div className="font-bold text-lg flex items-center">
                        {menuStack.length > 0 && (
                            <button onClick={handlePop} className="mr-3">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                        )}
                        {currentTitle}
                    </div>
                    <button onClick={toggleOpen}>
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="overflow-y-auto h-[calc(100%-50px)] pb-10">
                    {/* If root, show login buttons */}
                    {menuStack.length === 0 && (
                        <div className="p-4 border-b border-gray-100 flex flex-col space-y-3 bg-gray-50">
                            <Link href="#" className="flex justify-center items-center w-full py-2.5 bg-[#ec7211] text-white font-bold rounded-full text-sm">
                                Create an Account
                            </Link>
                            <Link href="#" className="flex justify-center items-center w-full py-2.5 border border-[#232f3e] text-[#232f3e] font-bold rounded-full text-sm">
                                Sign In
                            </Link>
                        </div>
                    )}

                    <ul className="py-2">
                        {currentLevelItems.map((item, idx) => (
                            <li key={idx}>
                                {item.children || item.sections ? (
                                    <button
                                        onClick={() => handlePush(item)}
                                        className="w-full text-left px-5 py-3.5 border-b border-gray-50 hover:bg-gray-50 flex items-center justify-between text-[#232f3e] font-medium"
                                    >
                                        {item.label}
                                        <ChevronRight className="w-4 h-4 text-gray-400" />
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="block px-5 py-3.5 border-b border-gray-50 hover:bg-gray-50 text-[#545b64] font-medium"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
