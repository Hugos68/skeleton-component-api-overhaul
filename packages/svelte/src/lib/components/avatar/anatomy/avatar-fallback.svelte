<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { AvatarRootContext } from '../modules/context';
	import type { AvatarFallbackProps } from '../modules/types';

	const props: AvatarFallbackProps = $props();
	const rootContext = AvatarRootContext.consume();
	const elementProps = $derived(
		mergeProps(
			rootContext.api.getFallbackProps(),
			{
				class: 'base:size-full base:flex base:justify-center base:items-center'
			},
			props
		)
	);
</script>

<span {...elementProps}>
	{@render props.children?.()}
</span>
