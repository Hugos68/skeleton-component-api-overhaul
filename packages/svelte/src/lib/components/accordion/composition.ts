import Accordion from "./anatomy/accordion.svelte";
import AccordionItem from "./anatomy/accordion.item.svelte";
import AccordionTrigger from "./anatomy/accordion.trigger.svelte";
import AccordionIndicator from "./anatomy/accordion.indicator.svelte";
import AccordionContent from "./anatomy/accordion.content.svelte";

const composed = Object.assign(Accordion, {
    Item: AccordionItem,
    Trigger: AccordionTrigger,
    Indicator: AccordionIndicator,
    Content: AccordionContent,
});

export { composed as Accordion };