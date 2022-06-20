<!--
### Dropdown component
 -->
<script context="module">
  const icon = `
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

<script lang="ts">
  import { createPopperActions } from './popper.js';
  import { clickOutside } from './action-clickoutside.js';
  import { quadIn, quadOut, quartIn, quartOut } from 'svelte/easing';
  import { fade } from 'svelte/transition';

  const [popper, content] = createPopperActions({
    placement: 'bottom-end',
    strategy: 'fixed',
  });

  let open = false;
</script>

<div class="wrapper {$$props.class || ''}">
  <div
    class="trigger"
    use:popper
    use:clickOutside
    on:click={() => (open = !open)}
    on:clickoutside={() => (open = false)}
  >
    <slot name="trigger" />
    <button class="trigger-icon" class:open>{@html icon}</button>
  </div>
  {#if open}
    <div
      in:fade={{ duration: 150, easing: quadIn }}
      out:fade={{ duration: 150, easing: quadOut }}
      use:content={{
        modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
      }}
      class="content"
    >
      <slot />
    </div>
  {/if}
</div>

<style>
  .wrapper {
    user-select: none;
  }

  .trigger {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .trigger-icon {
    transition: all 250ms var(--easing-standard);
    color: var(--color-text-secondary);
  }
  .trigger-icon :global(svg) {
    stroke: currentColor;
    width: var(--size-5);
    height: var(--size-5);
  }
  .trigger-icon.open {
    transform: rotate(180deg);
  }
  .trigger-icon:hover {
    color: --color-text;
  }

  .content {
    background: var(--color-bg-tertiary);
    border-radius: var(--radius-xs);
    box-shadow: var(--elevation-xs);
    padding: var(--size-3) var(--size-4);
    z-index: var(--layer-top);
  }
</style>
