<script lang="ts">
	import * as avatar from '@zag-js/avatar';
	import type { AvatarRootProps } from '../modules/types';
	import { useMachine, normalizeProps, mergeProps } from '@zag-js/svelte';
	import { AvatarRootContext } from '../modules/context';

	const props: AvatarRootProps = $props();
	const [machineProps, componentProps] = $derived(avatar.splitProps(props));
	const { children, ...restAttributes } = $derived(componentProps);
	const id = $props.id();
	const service = useMachine(avatar.machine, () => ({
		id: id,
		...machineProps
	}));
	const api = $derived(avatar.connect(service, normalizeProps));
	const attributes = $derived(
		mergeProps(
			api.getRootProps(),
			{
				class:
					'base:isolate base:bg-surface-400-600 base:size-16 base:rounded-full base:overflow-hidden'
			},
			restAttributes
		)
	);
	AvatarRootContext.provide({
		get api() {
			return api;
		}
	});
</script>

<div {...attributes}>
	{@render children?.()}
</div>
