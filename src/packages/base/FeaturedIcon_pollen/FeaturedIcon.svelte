<!--
### Fancy icon for featured areas
 -->
<script lang="ts">
  /** SVG or img src of icon */
  export let icon: string;
  /* Whether to consume as img */
  export let asImg: boolean | undefined = false;
</script>

<style lang="postcss">
  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: var(--size-11);
    height: var(--size-11);
    color: var(--color, inherit);
    background: var(--background, var(--color-grey-600));
    border: 6px solid var(--border, var(--color-grey-700));
    border-radius: var(--radius-100);
    @media (--mobile) {
      width: var(--size-12);
      height: var(--size-12);
    }
  }

  .icon-img,
  .icon-svg :global(svg) {
    width: var(--size-4);
    height: var(--size-4);
    @media (--mobile) {
      width: var(--size-5);
      height: var(--size-5);
    }
  }
</style>

<div class="circle {$$props.class || ''}">
  {#if asImg}
    <img src={icon} class="icon-img" alt="" />
  {:else}
    <span class="icon-svg">{@html icon}</span>
  {/if}
</div>
