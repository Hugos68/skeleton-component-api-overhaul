import { createContext } from "react";
import * as accordion from "@zag-js/accordion";

export const AccordionContext = createContext<accordion.Api>(null!);
export const AccordionItemContext = createContext<accordion.ItemProps>(null!);