'use client';

import * as avatar from "@zag-js/avatar";
import { useMachine, normalizeProps, mergeProps } from "@zag-js/react";
import { AvatarRootContext } from "../modules/context";
import { useId } from "react";
import type { AvatarRootProps } from "../modules/types";

export default function(props: AvatarRootProps) {
    const [
        machineProps,
        componentProps
    ] = avatar.splitProps(props);
    const {
        children,
        ...restAttributes
    } = componentProps;
    const service = useMachine(avatar.machine, {
        id: useId(),
        ...machineProps
    });
    const api = avatar.connect(service, normalizeProps);
    const attributes = mergeProps(api.getRootProps(), {
        className: 'base:isolate base:bg-surface-400-600 base:size-16 base:rounded-full base:overflow-hidden'
    }, restAttributes);
    return (
        <AvatarRootContext.Provider value={{ api }}>
            <div {...attributes}>
                {children}
            </div>
        </AvatarRootContext.Provider>
    )
}
