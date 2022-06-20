<!--
### Fullscreen modal
 -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { quadIn, quadOut } from 'svelte/easing';
  import { fade } from 'svelte/transition';
  import { portal } from '../../actions/portal';

  /** Whether modal is open */
  export let open: boolean;
  /** Optional root container (defaults to body) */
  export let root: HTMLElement | undefined = undefined;
  export let style: string | undefined = undefined;

  let overlay: HTMLDivElement;

  const event = createEventDispatcher();
  function close() {
    event('close');
    open = false;
  }

  function closeOnEsc({ key }: KeyboardEvent) {
    key === 'Escape' && close();
  }

  function closeOnClick({ target }: MouseEvent) {
    if (target === overlay) {
      close();
    }
  }

  function lockBody(node: HTMLElement, open: boolean) {
    const toggle = (open: boolean) => {
      node.parentElement!.style.overflow = open ? 'hidden' : '';
    };
    toggle(open);
    return {
      update: (open: boolean) => toggle(open)
    };
  }
</script>

<style lang="postcss">
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
    @media (--desktop) {
      max-width: var(--modal-width, 1140px);
    }
  }
</style>

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
