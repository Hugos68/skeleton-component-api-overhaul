<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="grid place-items-center w-screen h-screen">
	{@render children()}
</div>
