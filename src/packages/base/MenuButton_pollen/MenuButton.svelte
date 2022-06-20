<!--
### Selectable button for menu items
 -->
<script lang="ts">
  import { link } from '../../actions/link';

  /** Icon SVG for the button */
  export let icon: string;
  /** Label of the button */
  export let label: string;
  /** Whether button is active */
  export let active: boolean;
  /** Optional href */
  export let href: string | undefined = undefined;
  export let theme: 'standard' | 'compact' | 'mobile' = 'standard';
</script>

<style lang="postcss">
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
    &.active {
      background: var(--color-bg-tertiary);
    }
    & .icon {
      color: var(--color-grey-300);
      margin-right: var(--size-2);
    }
  }

  .button.compact {
    color: var(--color-text-secondary);
    &.active {
      color: var(--color-grey-100);
    }
    & .icon {
      margin-right: var(--size-2);
    }
  }

  .button.mobile {
    flex-direction: column;
    justify-content: center;
    padding: 0;
    color: var(--color-text-secondary);
    &.active {
      color: var(--color-grey-100);
    }
    & .icon {
      margin-bottom: var(--size-1);
    }
  }

  .icon {
    flex-shrink: 0;
    & :global(svg) {
      width: var(--size-5);
      height: var(--size-5);
    }
  }
</style>

<svelte:element
  this={!!href ? 'a' : 'button'}
  {href}
  class="button {theme} {$$props.class || ''}"
  class:active
  use:link
  {...$$restProps}
>
  <span class="icon">{@html icon}</span>
  {label}
</svelte:element>
