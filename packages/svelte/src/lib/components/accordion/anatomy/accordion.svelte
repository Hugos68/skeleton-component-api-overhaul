<script lang="ts">
	import { mergeProps, normalizeProps, useMachine } from "@zag-js/svelte";
    import * as accordion from "@zag-js/accordion";
	import type { AccordionProps } from "../types";
	import { setContext } from "svelte";

    const props: AccordionProps = $props();
    const [
        zagProps,
        componentProps
    ] = accordion.splitProps(props);
    const id = $props.id();
    const service = useMachine(accordion.machine, { 
        id: id,
        ...zagProps
    });
    const api = accordion.connect(service, normalizeProps);
    const elementProps =  mergeProps(api.getRootProps(), {
        className: 'base:grid gap-2'
    }, componentProps);
    setContext('accordion-context', api);
</script>

<div {...elementProps}>
    {props.children}
</div>