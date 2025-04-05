<script lang="ts">
    import { mergeProps } from "@zag-js/svelte";
	import { AccordionItemContext, AccordionRootContext } from "../modules/context";
    import type { AccordionContentProps } from "../modules/types";

    const props: AccordionContentProps = $props();
    const rootContext = AccordionRootContext.consume();
    const itemContext = AccordionItemContext.consume();
    const elementProps = $derived(mergeProps(rootContext.api.getItemContentProps(itemContext.itemProps), {
        class: 'base:py-2 base:px-4'
    }, props));
</script>

<div {...elementProps}>
    {@render props.children?.()}
</div>