'use client';

import { useContext } from "react";
import { mergeProps } from "@zag-js/react";
import { AccordionContext, AccordionItemContext } from "../context";
import type { AccordionTriggerProps } from "../types";

export function AccordionTrigger(props: AccordionTriggerProps) {
    const api = useContext(AccordionContext);
    const itemProps = useContext(AccordionItemContext);
    const elementProps =  mergeProps(api.getItemTriggerProps(itemProps), {
        className: 'base:w-full base:text-start base:hover:preset-tonal-primary base:py-2 base:px-4 base:rounded-base base:flex base:justify-between base:items-center'
    }, props);
    return (
        <button {...elementProps}>
            {props.children}
        </button>
    )
}