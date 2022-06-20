<!--
### Tabbed button style radio group input
 -->
<script lang="ts">
  import Field from '../Field/Field.svelte';

  type Option = { label: string; value: string | undefined; icon?: string };
  /** Name of group */
  export let name: string;
  /** Label for the control */
  export let label: string | undefined = undefined;
  /** Options to choose from*/
  export let options: Option[];
  /** The active option */
  export let active: Option['value'];
</script>

<style lang="postcss">
  .options {
    display: flex;
    border: 1px solid var(--color-grey-700);
    border-radius: var(--radius-md);
    overflow: hidden;
  }

  .option {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 var(--size-3);
    height: var(--size-10);
    cursor: pointer;
    transition: background 150ms ease;
    &:not(:last-child) {
      border-right: 1px solid var(--color-grey-700);
    }
    &.active {
      background: var(--color-grey-800);
    }
  }

  .option-icon {
    color: var(--color-text-secondary);
    margin-right: var(--size-2);
    transition: color 150ms ease;
    flex-shrink: 0;
    & :global(svg) {
      width: var(--size-5);
      height: var(--size-5);
    }
  }
  .active .option-icon {
    color: var(--color-text-primary);
  }
</style>

<Field {label} class={$$props.class || ''}>
  <div class="options">
    {#each options as { label, value, icon }}
      <label
        class="option --text-ui"
        class:icon
        class:active={value === active}
      >
        {#if icon}
          <div class="option-icon">
            {@html icon}
          </div>
        {/if}
        <span>{label}</span>
        <input hidden type="radio" {name} bind:group={active} {value} />
      </label>
    {/each}
  </div>
</Field>
