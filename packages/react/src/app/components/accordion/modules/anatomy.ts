import { AccordionRoot } from "../anatomy/accordion-root";
import { AccordionItem } from "../anatomy/accordion-item";
import { AccordionTrigger } from "../anatomy/accordion-trigger";
import { AccordionIndicator } from "../anatomy/accordion-indicator";
import { AccordionContent } from "../anatomy/accordion-content";

const Accordion = Object.assign(AccordionRoot, {
    Item: AccordionItem,
    Trigger: AccordionTrigger,
    Indicator: AccordionIndicator,
    Content: AccordionContent,
});

export { Accordion };