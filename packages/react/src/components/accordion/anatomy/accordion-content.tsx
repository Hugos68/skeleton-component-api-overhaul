'use client';

import { useContext } from "react";
import { mergeProps } from "@zag-js/react";
import { AccordionRootContext, AccordionItemContext } from "../modules/context";
import { AccordionContentProps } from "../modules/types";

export default function(props: AccordionContentProps) {
    const rootContext = useContext(AccordionRootContext);
    const itemContext = useContext(AccordionItemContext);
    const elementProps =  mergeProps(rootContext.api.getItemContentProps(itemContext.itemProps), {
        className: 'base:py-2 base:px-4'
    }, props);
    return (
        <div {...elementProps}>
            {props.children}
        </div>
    )
}