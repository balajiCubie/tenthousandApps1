import { useEffect, RefObject } from 'react';

/**
 * useClickOutside - A hook that detects clicks outside of an element.
 * 
 * Useful for closing dropdowns, modals, or popovers when clicking
 * outside of their boundaries.
 * 
 * @example
 * const ref = useRef<HTMLDivElement>(null);
 * useClickOutside(ref, closeDropdown);
 * 
 * return <div ref={ref}>Dropdown content</div>;
 */
export function useClickOutside<T extends HTMLElement>(
    ref: RefObject<T>,
    callback: () => void,
    enabled = true
): void {
    useEffect(() => {
        if (!enabled) return;

        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClick);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('mousedown', handleClick);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [ref, callback, enabled]);
}
