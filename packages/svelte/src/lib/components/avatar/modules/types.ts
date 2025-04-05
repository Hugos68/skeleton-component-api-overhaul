import * as avatar from '@zag-js/avatar';
import type { HTMLAttributes, HTMLImgAttributes } from 'svelte/elements';
import type { PropsWithChildren } from '$lib/internal/props-with-children';

interface AvatarRootProps extends PropsWithChildren, Omit<avatar.Props, 'id'>, Omit<HTMLAttributes<HTMLElement>,  'id' | 'dir'> {}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface AvatarImageProps extends HTMLImgAttributes {}
interface AvatarFallbackProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {}
interface AvatarRootContext {
    api: avatar.Api;
}

export type { 
    AvatarRootProps, 
    AvatarImageProps, 
    AvatarFallbackProps,
    AvatarRootContext
};
