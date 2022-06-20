<!--
### Dropdown component
 -->
<script lang="ts">
  import icon from 'lucide-static/icons/chevron-down.svg';
  import { createPopperActions } from 'svelte-popperjs';
  import { quadIn, quadOut, quartIn, quartOut } from 'svelte/easing';
  import { fade } from 'svelte/transition';
  import { clickOutside } from '../../actions/clickOutside';

  const [popper, content] = createPopperActions({
    placement: 'bottom-end',
    strategy: 'fixed'
  });

  let open = false;
</script>

<style lang="postcss">
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
    & :global(svg) {
      stroke: currentColor;
      width: var(--size-5);
      height: var(--size-5);
    }
    &.open {
      transform: rotate(180deg);
    }
    &:hover {
      color: white;
    }
  }

  .content {
    background: var(--color-bg-tertiary);
    border-radius: var(--radius-xs);
    box-shadow: var(--elevation-xs);
    padding: var(--size-3) var(--size-4);
    z-index: var(--layer-top);
  }
</style>

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
        modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
      }}
      class="content"
    >
      <slot />
    </div>
  {/if}
</div>
