import { mergeProps } from "@zag-js/react";
import { useContext } from "react";
import { AccordionContext, AccordionItemContext } from "../context";
import { AccordionIndicatorProps } from "../types"


export function AccordionIndicator(props: AccordionIndicatorProps) {
    const api = useContext(AccordionContext);
    const itemProps = useContext(AccordionItemContext);
    const elementProps =  mergeProps(api.getItemIndicatorProps(itemProps), props);
    return (
        <div {...elementProps}>
            {props.children}
        </div>
    )
}