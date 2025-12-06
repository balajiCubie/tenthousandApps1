import { useState, useCallback } from 'react';

export interface UseAccordionOptions {
    /** Whether multiple items can be open at once */
    allowMultiple?: boolean;
    /** Index of item to open by default (null for all closed) */
    defaultOpen?: number | null;
}

export interface UseAccordionReturn {
    /** Set of currently open indexes */
    openIndexes: Set<number>;
    /** Toggle an item's open state */
    toggle: (index: number) => void;
    /** Check if an item is open */
    isOpen: (index: number) => boolean;
    /** Open all items */
    openAll: (count: number) => void;
    /** Close all items */
    closeAll: () => void;
}

/**
 * useAccordion - A hook for managing accordion state.
 * 
 * Provides state management for expandable/collapsible content,
 * supporting both single and multiple open modes.
 * 
 * @example
 * const { isOpen, toggle } = useAccordion({ defaultOpen: 0 });
 * 
 * return items.map((item, i) => (
 *   <div key={i}>
 *     <button onClick={() => toggle(i)}>
 *       {item.title}
 *     </button>
 *     {isOpen(i) && <div>{item.content}</div>}
 *   </div>
 * ));
 */
export function useAccordion(options: UseAccordionOptions = {}): UseAccordionReturn {
    const { allowMultiple = false, defaultOpen = null } = options;

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

    const isOpen = useCallback((index: number) => openIndexes.has(index), [openIndexes]);

    const openAll = useCallback((count: number) => {
        const all = new Set<number>();
        for (let i = 0; i < count; i++) all.add(i);
        setOpenIndexes(all);
    }, []);

    const closeAll = useCallback(() => {
        setOpenIndexes(new Set());
    }, []);

    return { openIndexes, toggle, isOpen, openAll, closeAll };
}
