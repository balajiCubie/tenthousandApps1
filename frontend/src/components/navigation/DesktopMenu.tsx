import React from 'react';

interface DesktopMenuProps {
    menuItems: string[];
}

export const DesktopMenu: React.FC<DesktopMenuProps> = ({ menuItems }) => {
    return (
        <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
                <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-[#0972d3] transition-colors font-medium"
                >
                    {item}
                </a>
            ))}
        </div>
    );
};
