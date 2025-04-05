<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { AvatarRootContext } from '../modules/context';
	import type { AvatarImageProps } from '../modules/types';

	const props: AvatarImageProps = $props();
	const rootContext = AvatarRootContext.consume();
	const elementProps = $derived(
		mergeProps(
			rootContext.api.getImageProps(),
			{
				class: 'base:w-full base:object-cover'
			},
			props
		)
	);
</script>

<img {...elementProps} />
