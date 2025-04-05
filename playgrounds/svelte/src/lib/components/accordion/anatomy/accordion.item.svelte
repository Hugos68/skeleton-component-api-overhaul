<script lang="ts">
	import { mergeProps } from "@zag-js/svelte";
    import * as accordion from "@zag-js/accordion";
	import type { AccordionItemProps } from "../types";
	import { getContext, setContext } from "svelte";

    const props: AccordionItemProps = $props();
    const [
        zagProps,
        componentProps
    ] = accordion.splitItemProps(props);
    const id = $props.id();
    const api = getContext<accordion.Api>('accordion-context');
    const elementProps =  mergeProps(api.getItemProps(zagProps), {
        className: 'base:grid gap-2'
    }, componentProps);
    setContext('accordion-item-context', zagProps);
</script>

<div {...elementProps}>
    {props.children}
</div>