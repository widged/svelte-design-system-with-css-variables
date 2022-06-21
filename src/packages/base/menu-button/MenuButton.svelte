<script context="module">
  export let themes = {
    standard: 'standard',
    compact: 'compact',
    mobile: 'mobole',
  };
</script>

<!--
### Selectable button for menu items
 -->
<script>
  /** Icon SVG for the button */
  export let icon;
  /** Label of the button */
  export let label;
  /** Whether button is active */
  export let active;
  /** Optional href */
  export let theme = 'standard';
</script>

<button class="button {theme} {$$props.class || ''}" class:active {...$$restProps}>
  <span class="icon">{@html icon}</span>
  {label}
</button>

<style>
  .button {
    font: var(--text-sm);
    display: inline-flex;
    align-items: center;
    line-height: var(--line-none);
    color: var(--color-grey-100);
    font-weight: var(--weight-medium);

    transition: all 150ms var(--easing-standard);
    cursor: pointer;
    user-select: none;
  }

  .button.standard {
    padding: var(--size-2) var(--pad-sm);
    border-radius: var(--radius-sm);
  }
  .button.standard.active {
    background: var(--color-bg-tertiary);
  }
  .button.standard .icon {
    color: var(--color-grey-300);
    margin-right: var(--size-2);
  }
  .button.compact {
    color: var(--color-text-secondary);
  }

  .button.compact .active {
    color: var(--color-grey-100);
  }
  .button.compact .icon {
    margin-right: var(--size-2);
  }

  .button.mobile {
    flex-direction: column;
    justify-content: center;
    padding: 0;
    color: var(--color-text-secondary);
  }

  .button.mobile.active {
    color: var(--color-grey-100);
  }
  .button.mobile .icon {
    margin-bottom: var(--size-1);
  }

  .icon {
    flex-shrink: 0;
  }
  .icon :global(svg) {
    width: var(--size-5);
    height: var(--size-5);
  }
</style>
