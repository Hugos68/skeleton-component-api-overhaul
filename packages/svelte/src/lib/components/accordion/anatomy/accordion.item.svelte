<script lang="ts">
	import { mergeProps } from "@zag-js/svelte";
    import * as accordion from "@zag-js/accordion";
	import type { AccordionItemProps } from "../types";
	import { getContext, setContext } from "svelte";

    const props: AccordionItemProps = $props();
    const [
        zagProps,
        componentProps
    ] = $derived(accordion.splitItemProps(props));
    const accordionContext = getContext<{ api: accordion.Api }>('accordion-context');
    const elementProps =  $derived(mergeProps(accordionContext.api.getItemProps(zagProps), {
        class: 'base:grid gap-2'
    }, componentProps));
    setContext('accordion-item-context', {
        get itemProps() {
            return zagProps;
        },
    });
</script>

<div {...elementProps}>
    {@render props.children?.()}
</div>