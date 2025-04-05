<script lang="ts">
    import * as accordion from "@zag-js/accordion";
    import { mergeProps } from "@zag-js/svelte";
	import { getContext } from "svelte";
    import type {  AccordionIndicatorProps } from "../types";

    const props: AccordionIndicatorProps = $props();
    const accordionContext = getContext<{ api: accordion.Api }>('accordion-context');
    const accordionItemContext = getContext<{ itemProps: accordion.ItemProps }>('accordion-item-context');
    const elementProps = $derived(mergeProps(accordionContext.api.getItemIndicatorProps(accordionItemContext.itemProps), props));
</script>

<div {...elementProps}>
    {@render props.children?.()}
</div>