<script lang="ts">
	import { mergeProps, normalizeProps, useMachine } from '@zag-js/svelte';
	import * as accordion from '@zag-js/accordion';
	import { AccordionRootContext } from '../modules/context';
	import type { AccordionRootProps } from '../modules/types';

	const props: AccordionRootProps = $props();
	const [machineProps, componentProps] = $derived(accordion.splitProps(props));
	const id = $props.id();
	const service = useMachine(accordion.machine, () => ({
		id: id,
		...machineProps
	}));
	const api = $derived(accordion.connect(service, normalizeProps));
	const elementProps = $derived(
		mergeProps(
			api.getRootProps(),
			{
				class: 'base:grid base:gap-2'
			},
			componentProps
		)
	);
	AccordionRootContext.provide({
		get api() {
			return api;
		}
	});
</script>

<div {...elementProps}>
	{@render props.children?.()}
</div>
