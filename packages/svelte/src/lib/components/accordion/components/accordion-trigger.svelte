<script lang="ts">
    import { mergeProps } from "@zag-js/svelte";
	import { AccordionItemContext, AccordionRootContext } from "../modules/context";
    import type { AccordionTriggerProps } from "../modules/types";

    const props: AccordionTriggerProps = $props();
    const rootContext = AccordionRootContext.consume();
    const itemContext = AccordionItemContext.consume();
    const elementProps =  $derived(mergeProps(rootContext.api.getItemTriggerProps(itemContext.itemProps), {
        class: 'base:w-full base:text-start base:hover:preset-tonal-primary base:py-2 base:px-4 base:rounded-base base:flex base:justify-between base:items-center'
    }, props));
</script>

<button {...elementProps}>
    {@render props.children?.()}
</button>