<script lang="ts">
    import { Accordion } from "$lib/components/accordion";

    const items = [1, 2, 3];
    
    let value = $state(['item-1'])
</script>

<div class="grid place-items-center w-screen h-screen">
    <div class="max-w-lg w-full">
      <Accordion value={value} onValueChange={(details) => (value = details.value)}>
        {#each items as item}
          <Accordion.Item value={`item-${item}`}>
              <Accordion.Trigger>
                Item {item}
                <Accordion.Indicator>
                  {value.includes(`item-${item}`) ? '-' : '+'}
                </Accordion.Indicator>
              </Accordion.Trigger>
              <Accordion.Content>
                Content for item {item}
              </Accordion.Content>
            </Accordion.Item>
          {/each}
      </Accordion>
    </div>
  </div>