<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import * as accordion from '@zag-js/accordion';
	import { AccordionItemContext, AccordionRootContext } from '../modules/context';
	import type { AccordionItemProps } from '../modules/types';

	const rootContext = AccordionRootContext.consume();

	const props: AccordionItemProps = $props();
	const [itemProps, componentProps] = $derived(accordion.splitItemProps(props));
	const { children, ...restAttributes } = $derived(componentProps);
	const attributes = $derived(
		mergeProps(
			rootContext.api.getItemProps(itemProps),
			{
				class: 'base:grid gap-2'
			},
			restAttributes
		)
	);
	AccordionItemContext.provide({
		get itemProps() {
			return itemProps;
		}
	});
</script>

<div {...attributes}>
	{@render children?.()}
</div>
