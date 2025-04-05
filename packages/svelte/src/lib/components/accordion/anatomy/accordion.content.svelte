<script lang="ts">
    import * as accordion from "@zag-js/accordion";
    import { mergeProps } from "@zag-js/svelte";
	import { getContext } from "svelte";
    import type { AccordionContentProps } from "../types";

    const props: AccordionContentProps = $props();
    const accordionContext = getContext<{ api: accordion.Api }>('accordion-context');
    const accordionItemContext = getContext<{ itemProps: accordion.ItemProps }>('accordion-item-context');
    const elementProps = $derived(mergeProps(accordionContext.api.getItemContentProps(accordionItemContext.itemProps), {
        class: 'base:py-2 base:px-4'
    }, props));
</script>

<div {...elementProps}>
    {@render props.children?.()}
</div>