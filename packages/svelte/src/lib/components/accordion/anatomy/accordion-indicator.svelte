<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { AccordionRootContext, AccordionItemContext } from '../modules/context';
	import type { AccordionIndicatorProps } from '../modules/types';

	const props: AccordionIndicatorProps = $props();
	const rootContext = AccordionRootContext.consume();
	const itemContext = AccordionItemContext.consume();
	const elementProps = $derived(
		mergeProps(rootContext.api.getItemIndicatorProps(itemContext.itemProps), props)
	);
</script>

<div {...elementProps}>
	{@render props.children?.()}
</div>
