<script lang="ts">
  import type SvelteSelect from 'svelte-select';

  export let item: SvelteSelect['Item'] = undefined;
</script>

<style>
  .selection {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  .selection :global(.icon) {
    max-height: var(--size-6);
    border-radius: var(--radius-full);
    overflow: hidden;
    margin-right: var(--size-2);
  }
</style>

<div class="selection">
  {#if item.icon}
    <svelte:component this={item.icon} class="icon" {...item} />
  {/if}
  {item.label}
</div>
