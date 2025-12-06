/**
 * Footer link groups and data.
 */
export interface FooterLink {
    label: string;
    href: string;
}

export interface FooterLinkGroup {
    title: string;
    links: FooterLink[];
}

export const footerLinkGroups: FooterLinkGroup[] = [
    {
        title: 'Learn',
        links: [
            { label: 'Getting Started', href: '#' },
            { label: 'Tutorials', href: '#' },
            { label: 'Calculator Guides', href: '#' },
            { label: 'Video Library', href: '#' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { label: 'Documentation', href: '#' },
            { label: 'API Reference', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'Community Forum', href: '#' },
        ],
    },
    {
        title: 'Developers',
        links: [
            { label: 'API Overview', href: '#' },
            { label: 'Code Examples', href: '#' },
            { label: 'SDK Downloads', href: '#' },
            { label: 'Status Page', href: '#' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About Us', href: '#' },
            { label: 'Careers', href: '#' },
            { label: 'Contact', href: '#' },
            { label: 'Press Kit', href: '#' },
        ],
    },
];

export const legalLinks: FooterLink[] = [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Cookies', href: '#' },
];

export const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' },
    { value: 'de', label: 'Deutsch' },
];
