<script lang="ts">
  import checkIcon from 'lucide-static/icons/check.svg';
  import type SvelteSelect from 'svelte-select';

  export let item: SvelteSelect['Item'] & any = undefined;
  export let isActive = false;
  export let isHover = false;
</script>

<style lang="postcss">
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--size-3) var(--size-4);
    cursor: pointer;

    &.hover {
      background: var(--color-grey-800);
    }
  }

  .item-content {
    display: flex;
    align-items: center;
  }

  .item-icon :global(svg) {
    width: var(--size-5);
    height: var(--size-5);
    stroke: white;
  }

  .item :global(.icon) {
    max-height: var(--size-6);
    border-radius: var(--radius-full);
    overflow: hidden;
    margin-right: var(--size-2);
  }
</style>

<div class="item" class:hover={isHover}>
  <div class="item-content">
    {#if item.icon}
      <svelte:component this={item.icon} class="icon" {...item} />
    {/if}
    {item.label}
  </div>
  {#if isActive}
    <span class="item-icon">
      {@html checkIcon}
    </span>
  {/if}
</div>
