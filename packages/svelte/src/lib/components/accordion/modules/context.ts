import { createContext } from '$lib/internal/create-context';
import type {
	AccordionItemContext as AccordionItemContextType,
	AccordionRootContext as AccordionRootContextType
} from './types';

const AccordionRootContext = createContext<AccordionRootContextType>(null!);
const AccordionItemContext = createContext<AccordionItemContextType>(null!);

export { AccordionRootContext, AccordionItemContext };
