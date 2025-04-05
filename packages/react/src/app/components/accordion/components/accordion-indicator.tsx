import { mergeProps } from "@zag-js/react";
import { useContext } from "react";
import { AccordionRootContext, AccordionItemContext } from "../modules/context";
import { AccordionIndicatorProps } from "../modules/types"


export function AccordionIndicator(props: AccordionIndicatorProps) {
    const rootContext = useContext(AccordionRootContext);
    const itemContext = useContext(AccordionItemContext);
    const elementProps =  mergeProps(rootContext.api.getItemIndicatorProps(itemContext.itemProps), props);
    return (
        <div {...elementProps}>
            {props.children}
        </div>
    )
}