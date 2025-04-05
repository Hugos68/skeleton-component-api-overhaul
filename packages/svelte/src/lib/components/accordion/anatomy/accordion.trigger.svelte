<script lang="ts">
    import * as accordion from "@zag-js/accordion";
    import { mergeProps } from "@zag-js/svelte";
	import { getContext } from "svelte";
    import type { AccordionTriggerProps } from "../types";

    const props: AccordionTriggerProps = $props();
    const accordionContext = getContext<{ api: accordion.Api }>('accordion-context');
    const accordionItemContext = getContext<{ itemProps: accordion.ItemProps }>('accordion-item-context');
    const elementProps =  $derived(mergeProps(accordionContext.api.getItemTriggerProps(accordionItemContext.itemProps), {
        class: 'base:w-full base:text-start base:hover:preset-tonal-primary base:py-2 base:px-4 base:rounded-base base:flex base:justify-between base:items-center'
    }, props));
</script>

<button {...elementProps}>
    {@render props.children?.()}
</button>