import { createContext } from '$lib/internal/create-context';
import type { AvatarRootContext as AvatarRootContextType } from './types';

const AvatarRootContext = createContext<AvatarRootContextType>(null!);

export { AvatarRootContext };
