import { createContext } from "react";
import { AccordionContext as AccordionRootContextType, AccordionItemContext as AccordionItemContextType } from "./types";

const AccordionRootContext = createContext<AccordionRootContextType>(null!);
const AccordionItemContext = createContext<AccordionItemContextType>(null!);

export { AccordionRootContext, AccordionItemContext };