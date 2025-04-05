'use client';

import { useContext } from "react";
import { mergeProps } from "@zag-js/react";
import { AccordionContext, AccordionItemContext } from "../context";
import { AccordionContentProps } from "../types";

export function AccordionContent(props: AccordionContentProps) {
    const api = useContext(AccordionContext);
    const itemProps = useContext(AccordionItemContext);
    const elementProps =  mergeProps(api.getItemContentProps(itemProps), {
        className: 'base:py-2 base:px-4'
    }, props);
    return (
        <div {...elementProps}>
            {props.children}
        </div>
    )
}