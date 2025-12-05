import { LucideIcon } from 'lucide-react';

export interface NavItem {
    label: string;
    href: string;
    isExternal?: boolean;
    icon?: string;
    description?: string;
    children?: NavItem[];
    type?: 'link' | 'dropdown' | 'mega' | 'button' | 'icon-only';
    // For mega menu columns
    sections?: MegaMenuSection[];
}

export interface MegaMenuSection {
    title?: string;
    items: NavItem[];
}

export interface NavigationConfig {
    utilityNav: {
        left: NavItem[];
        right: NavItem[];
    };
    primaryNav: {
        left: NavItem[];
        center?: NavItem[];
        right: NavItem[];
    };
    secondaryNav: {
        title: string;
        items: NavItem[];
    };
}
