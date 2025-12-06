import React from 'react';
import { ArrowRightIcon } from '../icons';

export interface LinkWithArrowProps {
    /** Link destination */
    href?: string;
    /** Link text */
    children: React.ReactNode;
    /** Click handler (alternative to href) */
    onClick?: () => void;
    /** Additional CSS classes */
    className?: string;
    /** Whether this is an external link */
    external?: boolean;
}

/**
 * LinkWithArrow - A styled link component with an arrow icon.
 * 
 * Features hover animation where the arrow moves right.
 * Used for "Learn more", "Explore", etc. links.
 * 
 * @example
 * <LinkWithArrow href="/features">Learn more</LinkWithArrow>
 */
export const LinkWithArrow: React.FC<LinkWithArrowProps> = ({
    href,
    children,
    onClick,
    className = '',
    external = false,
}) => {
    const classes = `inline-flex items-center text-[#0972d3] text-sm font-medium hover:translate-x-1 transition-transform ${className}`;

    const content = (
        <>
            {children}
            <ArrowRightIcon className="w-4 h-4 ml-1" />
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                className={classes}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
            >
                {content}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={`${classes} cursor-pointer`}>
            {content}
        </button>
    );
};
