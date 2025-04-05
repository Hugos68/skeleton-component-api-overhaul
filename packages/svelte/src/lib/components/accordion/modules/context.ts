import { getContext, setContext } from "svelte";
import type { AccordionItemContext as AccordionItemContextType, AccordionRootContext as  AccordionRootContextType } from "./types";

function createContext<T>(defaultValue: T) {
    const key = Symbol();
    return {
        key: key,
        provide(value: T) {
            return setContext<T>(key, value);
        },
        consume() {
            return getContext<T>(key) || defaultValue;
        }
    }
}

export const AccordionRootContext = createContext<AccordionRootContextType>(null!);
export const AccordionItemContext = createContext<AccordionItemContextType>(null!);