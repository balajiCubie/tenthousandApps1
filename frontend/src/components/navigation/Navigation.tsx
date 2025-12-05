import React from 'react';
import { navigationData } from '@/data/navigationData';
import UtilityNav from './UtilityNav';
import PrimaryNav from './PrimaryNav';
import SecondaryNav from './SecondaryNav';
import MobileNav from './MobileNav';
import Link from 'next/link';
import { Search } from 'lucide-react';

const Navigation = () => {
    return (
        <header className="flex flex-col font-sans">
            {/* Desktop Wrapper */}
            <UtilityNav
                leftItems={navigationData.utilityNav.left}
                rightItems={navigationData.utilityNav.right}
            />

            {/* Primary Nav Wrapper to handle Mobile Header Injection */}
            <div className="relative">
                {/* Mobile Header (replaces PrimaryNav on small screens) */}
                <div className="lg:hidden bg-white h-[60px] flex items-center justify-between px-4 border-b border-gray-200">
                    <div className="flex items-center">
                        <MobileNav config={navigationData} />
                        <Link href="/" className="ml-4 font-bold text-[#232f3e] text-lg">
                            Calculator Cloud
                        </Link>
                    </div>
                    <Search className="w-5 h-5 text-[#232f3e]" />
                </div>

                {/* Desktop Primary Nav */}
                <div className="hidden lg:block">
                    <PrimaryNav
                        leftItems={navigationData.primaryNav.left}
                        rightItems={navigationData.primaryNav.right}
                    />
                </div>
            </div>

            <SecondaryNav
                title={navigationData.secondaryNav.title}
                items={navigationData.secondaryNav.items}
            />
        </header>
    );
};

export default Navigation;
