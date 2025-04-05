<script lang="ts">
    import * as accordion from "@zag-js/accordion";
    import { mergeProps } from "@zag-js/svelte";
	import { getContext } from "svelte";
    import type {  AccordionIndicatorProps } from "../types";

    const props: AccordionIndicatorProps = $props();
    const api = getContext<accordion.Api>('accordion-context');
    const itemProps = getContext<accordion.ItemProps>('accordion-item-context');
    const elementProps =  mergeProps(api.getItemIndicatorProps(itemProps), props);
</script>

<div {...elementProps}>
    {@render props.children?.()}
</div>