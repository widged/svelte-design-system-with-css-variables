<!--
### Fancy icon for featured areas
 -->
<script>
  /** SVG or img src of icon */
  export let icon;
  /* Whether to consume as img */
  export let asImg = false;
</script>

<div class="circle {$$props.class || ''}">
  {#if asImg}
    <img src={icon} class="icon-img" alt="" />
  {:else}
    <span class="icon-svg">{@html icon}</span>
  {/if}
</div>

<style>
  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: var(--size-11);
    height: var(--size-11);
    color: var(--color, inherit);
    background: var(--background, var(--grey-600));
    border: 6px solid var(--border, var(--grey-700));
    border-radius: var(--radius-100);
  }

  @media (--mobile) {
    .circle {
      width: var(--size-12);
      height: var(--size-12);
    }
  }
  .icon-img,
  .icon-svg :global(svg) {
    width: var(--size-4);
    height: var(--size-4);
  }
  @media (--mobile) {
    .icon-img,
    .icon-svg :global(svg) {
      width: var(--size-5);
      height: var(--size-5);
    }
  }
</style>
