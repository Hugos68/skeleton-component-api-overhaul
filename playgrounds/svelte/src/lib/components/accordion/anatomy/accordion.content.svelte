<script lang="ts">
    import * as accordion from "@zag-js/accordion";
    import { mergeProps } from "@zag-js/svelte";
	import { getContext } from "svelte";
    import type { AccordionContentProps } from "../types";

    const props: AccordionContentProps = $props();
    const api = getContext<accordion.Api>('accordion-context');
    const itemProps = getContext<accordion.ItemProps>('accordion-item-context');
    const elementProps =  mergeProps(api.getItemContentProps(itemProps), {
        className: 'base:py-2 base:px-4'
    }, props);
</script>

<div {...elementProps}>
    {@render props.children?.()}
</div>