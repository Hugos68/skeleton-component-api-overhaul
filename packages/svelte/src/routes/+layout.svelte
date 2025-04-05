<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>

<div class="grid place-items-center w-screen h-screen">
    <div class="max-w-lg w-full">
		{@render children()}
	</div>
</div>

