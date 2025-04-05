import { createContext } from "react";
import { AccordionContext as AccordionRootContextType, AccordionItemContext as AccordionItemContextType } from "./types";

export const AccordionRootContext = createContext<AccordionRootContextType>(null!);
export const AccordionItemContext = createContext<AccordionItemContextType>(null!);