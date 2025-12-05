import React from 'react';
import { NavItem } from '@/types/navigation';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import DynamicIcon from '../DynamicIcon';

interface UtilityNavProps {
    leftItems: NavItem[];
    rightItems: NavItem[];
}

const UtilityNav: React.FC<UtilityNavProps> = ({ leftItems, rightItems }) => {
    return (
        <div className="w-full bg-[#1B2530] text-gray-300 relative z-50 hidden md:block border-b border-gray-700/50">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="flex items-center justify-between h-[40px] text-[13px] font-medium tracking-wide">

                    {/* Left Side */}
                    <div className="flex items-center space-x-6">
                        {leftItems.map((item, idx) => (
                            <div key={idx} className="group relative flex items-center cursor-pointer hover:text-white transition-colors duration-200">
                                {item.icon && <DynamicIcon name={item.icon} className="w-3.5 h-3.5 mr-1.5 opacity-80 group-hover:opacity-100" />}
                                <span>{item.label}</span>
                                {item.type === 'dropdown' && (
                                    <ChevronDown className="w-3 h-3 ml-1 opacity-70 group-hover:opacity-100 transition-transform duration-200 group-hover:rotate-180" />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center space-x-6">
                        {rightItems.map((item, idx) => {
                            if (item.type === 'button') {
                                return (
                                    <Link
                                        key={idx}
                                        href={item.href}
                                        className="bg-[#EC7211] hover:bg-[#eb7f28] text-white px-3 py-1 rounded-full text-[12px] font-bold transition-colors shadow-sm"
                                    >
                                        {item.label}
                                    </Link>
                                );
                            }
                            return (
                                <Link
                                    key={idx}
                                    href={item.href}
                                    className="hover:text-white transition-colors duration-200 hover:underline hover:decoration-gray-500 hover:underline-offset-4"
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UtilityNav;
