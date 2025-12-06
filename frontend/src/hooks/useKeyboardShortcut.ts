import { useEffect, useCallback } from 'react';

export interface UseKeyboardShortcutOptions {
    /** Require Ctrl key (Windows/Linux) */
    ctrl?: boolean;
    /** Require Meta/Cmd key (Mac) */
    meta?: boolean;
    /** Require both Ctrl and Meta to trigger */
    ctrlOrMeta?: boolean;
    /** Require Shift key */
    shift?: boolean;
    /** Require Alt key */
    alt?: boolean;
    /** Whether the shortcut is currently enabled */
    enabled?: boolean;
}

/**
 * useKeyboardShortcut - A hook for handling keyboard shortcuts.
 * 
 * Supports modifier keys (Ctrl, Meta/Cmd, Shift, Alt) and
 * automatically cleans up event listeners.
 * 
 * @example
 * // Trigger on Cmd+K (Mac) or Ctrl+K (Windows)
 * useKeyboardShortcut('k', openSearch, { ctrlOrMeta: true });
 * 
 * @example
 * // Trigger on Escape
 * useKeyboardShortcut('Escape', closeModal);
 */
export function useKeyboardShortcut(
    key: string,
    callback: () => void,
    options: UseKeyboardShortcutOptions = {}
): void {
    const {
        ctrl = false,
        meta = false,
        ctrlOrMeta = false,
        shift = false,
        alt = false,
        enabled = true,
    } = options;

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            // Check if the pressed key matches
            if (event.key.toLowerCase() !== key.toLowerCase()) return;

            // Check modifier keys
            if (ctrlOrMeta) {
                if (!event.ctrlKey && !event.metaKey) return;
            } else {
                if (ctrl && !event.ctrlKey) return;
                if (meta && !event.metaKey) return;
            }

            if (shift && !event.shiftKey) return;
            if (alt && !event.altKey) return;

            // Prevent default and call callback
            event.preventDefault();
            callback();
        },
        [key, callback, ctrl, meta, ctrlOrMeta, shift, alt]
    );

    useEffect(() => {
        if (!enabled) return;

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown, enabled]);
}
