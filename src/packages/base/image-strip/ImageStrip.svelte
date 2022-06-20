<!--
### Strip of images used for navigation
 -->
<script>
  import { createEventDispatcher, tick } from 'svelte';

  import Button from './Button.svelte';

  /** Images in collection */
  export let images;
  /** ID of the active image  */
  export let active = images[0].id;
  /** Optional compact view  */
  export let compact = false;

  const event = createEventDispatcher();

  let imageElements = []; /*: HTMLImageElement[]*/

  $: currentIndex = images.findIndex(({ id }) => id === active);

  async function navigate(id) {
    active = id;
    await tick();
    imageElements[currentIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
    event('change', { active });
  }
</script>

<div class="container --scrollable" class:compact>
  <div class="container-inner">
    {#each images as { path, alt, id, ...img }, i}
      <img
        {alt}
        class:active={id === active}
        bind:this={imageElements[i]}
        on:click={() => navigate(id)}
        sizes="48px"
        {...img}
      />
    {/each}
  </div>
</div>

<div class="nav" class:compact>
  <Button
    theme={compact ? 'tertiary' : 'secondary'}
    withArrow="<-"
    disabled={currentIndex === 0}
    on:click={() => navigate(images[Math.max(currentIndex - 1, 0)].id)}
    >{compact ? '' : 'Previous'}</Button
  >
  {#if compact}
    <div class="nav-label">
      {currentIndex + 1} of {images.length}
    </div>
  {/if}
  <Button
    theme={compact ? 'tertiary' : 'secondary'}
    withArrow="->"
    disabled={currentIndex + 1 === images.length}
    on:click={() => navigate(images[Math.min(currentIndex + 1, images.length)].id)}
    >{compact ? '' : 'Next'}</Button
  >
</div>

<style>
  .container {
    grid-column: 1 / -1;
    display: flex;
    overflow-x: scroll;
    padding: var(--size-3) var(--gutter);
    user-select: none;
    margin: 0 calc(0px - var(--gutter));
    justify-content: center;
  }

  .container-inner {
    display: flex;
  }

  img {
    height: var(--size-12);
    cursor: pointer;
    opacity: 0.4;
    margin: 0 2px;
    transition: all 150ms ease;
  }

  img.active {
    opacity: 1;
  }
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: var(--grid-gap);
  }

  .nav.compact {
    margin-top: var(--size-1);
  }

  .nav-label {
    font: var(--text-xs);
    flex: 1;
    color: var(--color-text-secondary);
    text-align: center;
    user-select: none;
  }

  .nav :global(button.disabled) {
    opacity: 0;
  }
</style>
