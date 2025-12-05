import React from 'react';
import { MenuIcon, CloseIcon } from '../icons';

interface MobileMenuButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, onClick }) => {
    return (
        <button
            className="md:hidden p-2 text-gray-700"
            onClick={onClick}
        >
            {isOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
    );
};
