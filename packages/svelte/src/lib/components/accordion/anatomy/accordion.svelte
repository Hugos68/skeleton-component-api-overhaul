<script lang="ts">
	import { mergeProps, normalizeProps, useMachine } from "@zag-js/svelte";
    import * as accordion from "@zag-js/accordion";
	import type { AccordionProps } from "../types";
	import { setContext } from "svelte";

    const props: AccordionProps = $props();
    const [
        zagProps,
        componentProps
    ] = $derived(accordion.splitProps(props));
    const id = $props.id();
    const service = useMachine(accordion.machine, () => ({ 
        id: id,
        ...zagProps
    }));
    const api = $derived(accordion.connect(service, normalizeProps));
    const elementProps =  $derived(mergeProps(api.getRootProps(), {
        class: 'base:grid base:gap-2'
    }, componentProps));
    setContext('accordion-context', {
        get api() {
            return api;
        },
    });
</script>

<div {...elementProps}>
    {@render props.children?.()}
</div>