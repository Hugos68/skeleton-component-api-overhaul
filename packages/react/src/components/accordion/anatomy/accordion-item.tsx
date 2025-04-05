'use client';

import { useContext } from 'react';
import * as accordion from '@zag-js/accordion';
import { mergeProps } from '@zag-js/react';
import type { AccordionItemProps } from '../modules/types';
import { AccordionRootContext, AccordionItemContext } from '../modules/context';

export default function(props: AccordionItemProps) {
    const rootContext = useContext(AccordionRootContext);
    const [
        itemProps,
        componentProps
    ] = accordion.splitItemProps(props);
    const elementProps =  mergeProps(rootContext.api.getItemProps(itemProps), componentProps);
    return (
        <AccordionItemContext.Provider value={{ itemProps }}>
            <div {...elementProps}>
                {props.children}
            </div>
        </AccordionItemContext.Provider>
    )
}