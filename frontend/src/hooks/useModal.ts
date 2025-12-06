import { useState, useCallback } from 'react';

export interface UseModalReturn {
    /** Whether the modal is currently open */
    isOpen: boolean;
    /** Open the modal */
    open: () => void;
    /** Close the modal */
    close: () => void;
    /** Toggle the modal state */
    toggle: () => void;
}

/**
 * useModal - A simple hook for managing modal/dialog state.
 * 
 * @example
 * const { isOpen, open, close } = useModal();
 * 
 * return (
 *   <>
 *     <button onClick={open}>Open Modal</button>
 *     {isOpen && <Modal onClose={close}>Content</Modal>}
 *   </>
 * );
 */
export function useModal(initialState = false): UseModalReturn {
    const [isOpen, setIsOpen] = useState(initialState);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

    return { isOpen, open, close, toggle };
}
