'use client';

import { useId } from 'react';
import * as accordion from '@zag-js/accordion';
import { useMachine, normalizeProps, mergeProps } from '@zag-js/react';
import { AccordionContext } from '../context';
import type { AccordionProps } from '../types';

export function Accordion(props: AccordionProps) {
    const [
        zagProps,
        componentProps
    ] = accordion.splitProps(props);
    const service = useMachine(accordion.machine, { 
        id: useId(),
        ...zagProps
    });
    const api = accordion.connect(service, normalizeProps);
    const elementProps =  mergeProps(api.getRootProps(), {
        className: 'base:grid base:gap-2'
    }, componentProps);
    return (
        <AccordionContext.Provider value={api}>
            <div {...elementProps}>
                {props.children}
            </div>
        </AccordionContext.Provider>
    )
}