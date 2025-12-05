import React from 'react';
import { Button } from '../ui/Button';
import { SearchIcon } from '../icons';

export const NavActions = () => {
    return (
        <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-[#0972d3] transition-colors p-2">
                <SearchIcon className="w-5 h-5" />
            </button>
            <Button variant="outline" size="sm">Sign in</Button>
            <Button variant="primary" size="sm">Create account</Button>
        </div>
    );
};
