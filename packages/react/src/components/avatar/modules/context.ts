import { createContext } from "react";
import type { AvatarRootContext as AvatarRootContextType } from "./types";

const AvatarRootContext = createContext<AvatarRootContextType>(null!);

export { AvatarRootContext };