import React from 'react';

export interface CardProps {
    children: React.ReactNode;
    hover?: boolean;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ children, hover = false, className = '' }) => {
    const baseStyles = 'glass rounded-xl shadow-lg p-6';
    const hoverStyles = hover ? 'glass-hover cursor-pointer' : '';

    return (
        <div className={`${baseStyles} ${hoverStyles} ${className}`}>
            {children}
        </div>
    );
};
