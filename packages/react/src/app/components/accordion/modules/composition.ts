import { AccordionRoot } from "../components/accordion-root";
import { AccordionItem } from "../components/accordion-item";
import { AccordionTrigger } from "../components/accordion-trigger";
import { AccordionIndicator } from "../components/accordion-indicator";
import { AccordionContent } from "../components/accordion-content";

const Accordion = Object.assign(AccordionRoot, {
    Item: AccordionItem,
    Trigger: AccordionTrigger,
    Indicator: AccordionIndicator,
    Content: AccordionContent,
});

export { Accordion };