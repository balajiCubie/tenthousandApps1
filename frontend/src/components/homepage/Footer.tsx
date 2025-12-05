import React from 'react';
import { Container } from '../ui/Container';
import { TwitterIcon, GitHubIcon, LinkedInIcon, GlobeIcon } from '../icons';

export const Footer = () => {
    const linkGroups = {
        learn: {
            title: 'Learn',
            links: [
                { label: 'Getting Started', href: '#' },
                { label: 'Tutorials', href: '#' },
                { label: 'Calculator Guides', href: '#' },
                { label: 'Video Library', href: '#' },
            ]
        },
        resources: {
            title: 'Resources',
            links: [
                { label: 'Documentation', href: '#' },
                { label: 'API Reference', href: '#' },
                { label: 'Blog', href: '#' },
                { label: 'Community Forum', href: '#' },
            ]
        },
        developers: {
            title: 'Developers',
            links: [
                { label: 'API Overview', href: '#' },
                { label: 'Code Examples', href: '#' },
                { label: 'SDK Downloads', href: '#' },
                { label: 'Status Page', href: '#' },
            ]
        },
        company: {
            title: 'Company',
            links: [
                { label: 'About Us', href: '#' },
                { label: 'Careers', href: '#' },
                { label: 'Contact', href: '#' },
                { label: 'Press Kit', href: '#' },
            ]
        },
    };

    return (
        <footer className="bg-[#232f3e] text-white">
            <Container>
                {/* Main Footer Content */}
                <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {Object.values(linkGroups).map((group) => (
                        <div key={group.title}>
                            <h4 className="font-semibold text-lg mb-4">{group.title}</h4>
                            <ul className="space-y-2">
                                {group.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-gray-300 hover:text-white transition-colors text-sm"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <TwitterIcon className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <GitHubIcon className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <LinkedInIcon className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Language Switcher */}
                        <div className="flex items-center gap-2 text-gray-300">
                            <GlobeIcon className="w-5 h-5" />
                            <select className="bg-transparent border border-gray-600 rounded px-3 py-1 text-sm focus:outline-none focus:border-gray-400">
                                <option value="en">English</option>
                                <option value="es">Español</option>
                                <option value="fr">Français</option>
                                <option value="de">Deutsch</option>
                            </select>
                        </div>

                        {/* Copyright & Links */}
                        <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
                            <span>&copy; 2024 Calculator Platform. All rights reserved.</span>
                            <div className="flex gap-4">
                                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                                <a href="#" className="hover:text-white transition-colors">Terms</a>
                                <a href="#" className="hover:text-white transition-colors">Cookies</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
