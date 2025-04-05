<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { AvatarRootContext } from '../modules/context';
	import type { AvatarImageProps } from '../modules/types';
	const rootContext = AvatarRootContext.consume();
	const props: AvatarImageProps = $props();
	const attributes = $derived(
		mergeProps(
			rootContext.api.getImageProps(),
			{
				class: 'base:w-full base:object-cover'
			},
			props
		)
	);
</script>

<img {...attributes} />
