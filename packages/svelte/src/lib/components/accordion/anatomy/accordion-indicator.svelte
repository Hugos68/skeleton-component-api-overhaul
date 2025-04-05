<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { AccordionRootContext, AccordionItemContext } from '../modules/context';
	import type { AccordionIndicatorProps } from '../modules/types';

	const rootContext = AccordionRootContext.consume();
	const itemContext = AccordionItemContext.consume();
	const props: AccordionIndicatorProps = $props();
	const { children, ...restAttributes } = $derived(props);
	const attributes = $derived(
		mergeProps(rootContext.api.getItemIndicatorProps(itemContext.itemProps), restAttributes)
	);
</script>

<div {...attributes}>
	{@render children?.()}
</div>
