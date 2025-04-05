'use client';

import { Accordion } from "./anatomy/accordion";
import { AccordionItem } from "./anatomy/accordion.item";
import { AccordionTrigger } from "./anatomy/accordion.trigger";
import { AccordionIndicator } from "./anatomy/accordion.indicator";
import { AccordionContent } from "./anatomy/accordion.content";

const composed = Object.assign(Accordion, {
    Item: AccordionItem,
    Trigger: AccordionTrigger,
    Indicator: AccordionIndicator,
    Content: AccordionContent,
});

export { composed as Accordion };