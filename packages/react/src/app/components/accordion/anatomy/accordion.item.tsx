'use client';

import { useContext } from 'react';
import * as accordion from '@zag-js/accordion';
import { mergeProps } from '@zag-js/react';
import type { AccordionItemProps } from '../types';
import { AccordionContext, AccordionItemContext } from '../context';

export function AccordionItem(props: AccordionItemProps) {
    const api = useContext(AccordionContext);
    const [
        zagProps,
        componentProps
    ] = accordion.splitItemProps(props);
    const elementProps =  mergeProps(api.getItemProps(zagProps), componentProps);
    return (
        <AccordionItemContext.Provider value={zagProps}>
            <div {...elementProps}>
                {props.children}
            </div>
        </AccordionItemContext.Provider>
    )
}