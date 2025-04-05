import { setContext, getContext } from "svelte";

interface Context<T> {
    key: symbol;
    provide(value: T): T;
    consume(): T;
}

function createContext<T>(defaultValue: T): Context<T> {
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

export type {
    Context,
}

export {
    createContext,
}
