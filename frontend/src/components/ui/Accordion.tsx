'use client';

import React, { useState, useCallback } from 'react';
import { ChevronDownIcon } from '../icons';

export interface AccordionItem {
    /** Unique identifier for the item */
    id?: string;
    /** Title shown in the accordion header */
    title: string;
    /** Content shown when the accordion is expanded */
    content: string | React.ReactNode;
}

export interface AccordionProps {
    /** Array of accordion items */
    items: AccordionItem[];
    /** Index of the item that should be open by default */
    defaultOpen?: number | null;
    /** Whether multiple items can be open at once */
    allowMultiple?: boolean;
    /** Additional CSS classes */
    className?: string;
}

/**
 * Accordion - A collapsible content component.
 * 
 * Features smooth animations, single or multiple open modes,
 * and consistent styling across the platform.
 * 
 * @example
 * <Accordion
 *   items={[
 *     { title: 'Question 1', content: 'Answer 1' },
 *     { title: 'Question 2', content: 'Answer 2' },
 *   ]}
 *   defaultOpen={0}
 * />
 */
export const Accordion: React.FC<AccordionProps> = ({
    items,
    defaultOpen = 0,
    allowMultiple = false,
    className = '',
}) => {
    const [openIndexes, setOpenIndexes] = useState<Set<number>>(() => {
        const initial = new Set<number>();
        if (defaultOpen !== null) initial.add(defaultOpen);
        return initial;
    });

    const toggle = useCallback((index: number) => {
        setOpenIndexes((prev) => {
            const next = new Set(prev);
            if (next.has(index)) {
                next.delete(index);
            } else {
                if (!allowMultiple) {
                    next.clear();
                }
                next.add(index);
            }
            return next;
        });
    }, [allowMultiple]);

    const isOpen = (index: number) => openIndexes.has(index);

    return (
        <div className={`space-y-4 ${className}`}>
            {items.map((item, index) => (
                <div
                    key={item.id || index}
                    className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden transition-all duration-200"
                >
                    <button
                        onClick={() => toggle(index)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                        aria-expanded={isOpen(index)}
                    >
                        <span className="text-lg font-semibold text-gray-900">
                            {item.title}
                        </span>
                        <ChevronDownIcon
                            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen(index) ? 'rotate-180' : ''
                                }`}
                        />
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ${isOpen(index) ? 'max-h-96' : 'max-h-0'
                            }`}
                    >
                        <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                            {item.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
