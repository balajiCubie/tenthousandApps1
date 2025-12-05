'use client';

import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Logo } from '../navigation/Logo';
import { ProductsMegaMenu } from '../navigation/ProductsMegaMenu';
import { SolutionsDropdown } from '../navigation/SolutionsDropdown';
import { CategoriesDropdown } from '../navigation/CategoriesDropdown';
import { DeveloperNav } from '../navigation/DeveloperNav';
import { GlobalSearch } from '../navigation/GlobalSearch';
import { ThemeToggle } from '../navigation/ThemeToggle';
import { RegionSelector } from '../navigation/RegionSelector';
import { AccountMenu } from '../navigation/AccountMenu';
import { MobileMenuButton } from '../navigation/MobileMenuButton';
import { MobileMenu } from '../navigation/MobileMenu';

export const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Mock user state - replace with actual auth later
    const isSignedIn = false;
    const user = {
        name: 'John Doe',
        email: 'john@example.com'
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200/60 dark:border-gray-700 shadow-sm">
            <Container>
                <div className="flex items-center justify-between h-16">
                    {/* Left: Logo + Product Navigation */}
                    <div className="flex items-center gap-1">
                        <Logo />

                        <div className="hidden lg:flex items-center gap-1 ml-6">
                            <ProductsMegaMenu />
                            <SolutionsDropdown />
                            <CategoriesDropdown />
                        </div>
                    </div>

                    {/* Center: Developer Links (Desktop only) */}
                    <DeveloperNav />

                    {/* Right: Utility Navigation */}
                    <div className="flex items-center gap-1">
                        <GlobalSearch />
                        <ThemeToggle />
                        <div className="hidden md:block">
                            <RegionSelector />
                        </div>
                        <div className="hidden lg:block">
                            <AccountMenu isSignedIn={isSignedIn} user={user} />
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <MobileMenuButton
                                isOpen={mobileMenuOpen}
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            />
                        </div>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
            />
        </nav>
    );
};
