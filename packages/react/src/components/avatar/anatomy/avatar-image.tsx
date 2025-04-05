'use client';

import { mergeProps } from "@zag-js/react";
import { AvatarRootContext } from "../modules/context";
import type { AvatarImageProps } from "../modules/types";
import { useContext } from "react";

export default function(props: AvatarImageProps ) {
    const rootContext = useContext(AvatarRootContext);
    const elementProps =  mergeProps(rootContext.api.getImageProps(), {
        className: 'base:w-full base:object-cover'
    }, props);
    return <img {...elementProps} />
}
