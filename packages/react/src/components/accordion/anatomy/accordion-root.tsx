'use client';

import { useId } from 'react';
import * as accordion from '@zag-js/accordion';
import { useMachine, normalizeProps, mergeProps } from '@zag-js/react';
import { AccordionRootContext } from '../modules/context';
import type { AccordionRootProps } from '../modules/types';

export default function(props: AccordionRootProps) {
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
        <AccordionRootContext.Provider value={{ api }}>
            <div {...elementProps}>
                {props.children}
            </div>
        </AccordionRootContext.Provider>
    )
}