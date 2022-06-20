<!--
### Fullscreen modal
 -->
<script>
  import { createEventDispatcher } from 'svelte';
  import { quadIn, quadOut } from 'svelte/easing';
  import { fade } from 'svelte/transition';
  import { portal } from './action-portal.js';

  /** Whether modal is open */
  export let open;
  /** Optional root container (defaults to body) */
  export let root = undefined;
  export let style = undefined;

  let overlay;

  const event = createEventDispatcher();
  function close() {
    event('close');
    open = false;
  }

  function closeOnEsc({ key }) {
    key === 'Escape' && close();
  }

  function closeOnClick({ target }) {
    if (target === overlay) {
      close();
    }
  }

  function lockBody(node, open) {
    const toggle = (open) => {
      node.parentElement.style.overflow = open ? 'hidden' : '';
    };
    toggle(open);
    return {
      update: (open) => toggle(open),
    };
  }
</script>

<svlete:window on:keydown={closeOnEsc} />
<svelte:body use:lockBody={open} />

{#if open}
  <div
    class="overlay"
    use:portal={root}
    bind:this={overlay}
    in:fade={{ duration: 200 }}
    out:fade={{ duration: 200 }}
    on:click={closeOnClick}
  >
    <div
      in:fade={{ delay: 10, duration: 250, easing: quadIn }}
      out:fade={{ duration: 250, easing: quadOut }}
      class="modal"
      {style}
    >
      <slot />
    </div>
  </div>
{/if}

<style>
  .overlay {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-black-opacity);
    z-index: var(--layer-top);
    backdrop-filter: var(--blur-md);
  }

  .modal {
    display: flex;
    flex-direction: column;
    background: var(--color-bg);
    border-radius: var(--modal-radius, var(--radius-sm));
    margin: var(--grid-page-gutter);
    max-width: var(--modal-width, var(--width-md));
    width: 100%;
    overflow: hidden;
  }

  @media (--desktop) {
    .modal {
      max-width: var(--modal-width, 1140px);
    }
  }
</style>
