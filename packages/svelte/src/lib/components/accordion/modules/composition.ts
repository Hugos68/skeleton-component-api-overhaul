import AccordionRoot from "../components/accordion-root.svelte";
import AccordionItem from "../components/accordion-item.svelte";
import AccordionTrigger from "../components/accordion-trigger.svelte";
import AccordionIndicator from "../components/accordion-indicator.svelte";
import AccordionContent from "../components/accordion-content.svelte";

const Accordion = Object.assign(AccordionRoot, {
    Item: AccordionItem,
    Trigger: AccordionTrigger,
    Indicator: AccordionIndicator,
    Content: AccordionContent,
});

export { Accordion };