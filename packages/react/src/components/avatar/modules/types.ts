import * as avatar from '@zag-js/avatar';
import { HTMLAttributes, ImgHTMLAttributes, PropsWithChildren } from 'react';

interface AvatarRootProps extends PropsWithChildren, Omit<avatar.Props, 'id'>, Omit<HTMLAttributes<HTMLElement>,  'id' | 'dir'> {}
interface AvatarImageProps extends ImgHTMLAttributes<HTMLImageElement> {}
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
