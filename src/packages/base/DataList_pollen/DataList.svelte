<!--
### Data list table
-->
<script lang="ts">
  import { slide } from 'svelte/transition';
  import arrowIcon from 'lucide-static/icons/chevron-down.svg';

  /** Label for the list */
  export let label: string;
  /** List of data */
  export let data: ({ label: string; value: string } | undefined)[];

  let open: boolean = true;
</script>

<style lang="postcss">
  .wrapper {
    font: var(--text-sm);
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-text-secondary);
    font-weight: var(--weight-medium);
    cursor: pointer;
  }

  .label-icon {
    transition: transform 200ms var(--easing-standard);
    &.open {
      transform: rotate(180deg);
    }
    & :global(svg) {
      width: var(--size-4);
      height: var(--size-4);
      stroke: currentColor;
    }
  }

  .list {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    margin-top: var(--size-1);
  }

  .cell {
    padding: var(--size-2) 0;
    color: var(--color-text-secondary);
    border-bottom: 1px solid var(--color-bg-secondary);
    &.value {
      color: white;
      text-align: right;
    }
    &:nth-last-child(-n + 2) {
      border-bottom: none;
    }
  }
</style>

<div class="wrapper {$$props.class || ''}">
  <div class="label" on:click={() => (open = !open)}>
    <span>{label}</span>
    <span class="label-icon" class:open>{@html arrowIcon}</span>
  </div>
  {#if open}
    <div class="list" transition:slide|local>
      {#each data as item}
        <div class="cell">
          {item?.label}
        </div>
        <div class="cell value">
          {item?.value}
        </div>
      {/each}
    </div>
  {/if}
</div>
