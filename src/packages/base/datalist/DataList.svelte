<script context="module">
  const arrowIcon = `
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polyline points="6 9 12 15 18 9" />
</svg>
`;
</script>

<script>
  import { slide } from 'svelte/transition';
  export let label;
  export let records;
  let open = true;
</script>

<div class="wrapper {$$props.class || ''}">
  <div class="label" on:click={() => (open = !open)}>
    <span>{label}</span>
    <span class="label-icon" class:open>{@html arrowIcon}</span>
  </div>
  {#if open}
    <div class="list" transition:slide|local>
      {#each records as d}
        <div class="cell">
          {d?.label}
        </div>
        <div class="cell value">
          {d?.value}
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
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
  }

  .label-icon .open {
    transform: rotate(180deg);
  }
  .label-icon :global(svg) {
    width: var(--size-4);
    height: var(--size-4);
    stroke: currentColor;
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
  }

  .cell.value {
    color: var(--color-text);
    text-align: right;
  }
  .cell:nth-last-child(-n + 2) {
    border-bottom: none;
  }
</style>
