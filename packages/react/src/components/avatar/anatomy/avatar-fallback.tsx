'use client';

import { mergeProps } from "@zag-js/react";
import { AvatarRootContext } from "../modules/context";
import type { AvatarFallbackProps } from "../modules/types";
import { useContext } from "react";

export default function(props: AvatarFallbackProps) {
    const rootContext = useContext(AvatarRootContext);
    const elementProps =  mergeProps(rootContext.api.getFallbackProps(), {
        className: 'base:size-full base:flex base:justify-center base:items-center'
    }, props);
    return (
        <span {...elementProps}>
            {props.children}
        </span>
    )
}
