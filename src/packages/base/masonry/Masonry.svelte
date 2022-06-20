<script context="module">
  //  export let size = 'small' | 'medium' | 'large'
  //  export let layout: 'grid' | 'column' | 'stacked' = 'grid';
</script>

<script>
  import { createEventDispatcher, onMount, tick } from 'svelte';
  import { dndzone } from 'svelte-dnd-action';
  import { flip } from 'svelte/animate';
  import { computeGrid } from './lib/layout';

  const dndAnimationDuration = 300;
  const event = createEventDispatcher();

  const sizes = {
    small: {
      rowHeight: 200,
      columns: [4, 3, 2],
    },
    medium: {
      rowHeight: 300,
      columns: [3, 2, 1],
    },
    large: {
      rowHeight: 400,
      columns: [2, 2, 1],
    },
  };

  export let items = [];
  export let size = 'medium';
  export let layout = 'grid';
  export let gutter = 12;
  export let component;
  export let dnd = false;

  let scaledItems;
  let width;
  let ready;

  onMount(() => {
    tick().then(() => (ready = true));
  });

  function itemStyle({ scaledWidth, scaledHeight, isLastInRow, isLastRow }) {
    let marginRight = gutter + 'px',
      flex = `0 0 ${scaledWidth}px`,
      marginBottom = isLastRow ? '0' : marginRight;

    if (isLastInRow) {
      marginRight = '0';
      flex = `1 1 ${scaledWidth - 4}px`;
    }

    return `height: ${scaledHeight}px; flex: ${flex}; margin-right: ${marginRight}; margin-bottom: ${marginBottom};`;
  }

  $: scaledItems = computeGrid({
    items,
    containerWidth: width || 1280,
    targetHeight: sizes[size].rowHeight,
    gutter,
  });
</script>

<div class="masonry" bind:clientWidth={width}>
  <div
    class="container"
    use:dndzone={{
      type: 'photos',
      items,
      flipDurationMs: dndAnimationDuration,
      dropTargetStyle: {},
      dragDisabled: !dnd,
    }}
    on:consider={({ detail }) => (items = detail.items)}
    on:finalize={({ detail }) => {
      items = detail.items;
      event('dnd', { items: detail.items });
    }}
    class:hidden={!width}
  >
    {#each scaledItems as { id, index, ratio, scaledHeight, scaledWidth, isLastInRow, isLastRow, scaledWidthPc, ...item } (id)}
      <div
        class="item"
        animate:flip={{ duration: ready ? dndAnimationDuration : 0 }}
        style={itemStyle({
          id,
          scaledHeight,
          scaledWidth,
          isLastInRow,
          isLastRow,
        })}
      >
        <svelte:component this={component} {...item} />
      </div>
    {/each}
  </div>
</div>

<style>
  .masonry {
    max-width: 100%;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .item {
    position: relative;
    height: 100%;
  }

  .item > :global(*) {
    width: 100%;
    height: 100%;
  }

  .hidden {
    visibility: hidden;
  }
</style>
