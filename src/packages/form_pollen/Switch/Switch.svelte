<!--
### Form Switch input (as checkbox)
 -->
<script lang="ts">
  export let checked: boolean | undefined;
  export let label: string;
</script>

<style lang="postcss">
  .wrapper {
    display: flex;
    align-items: center;
  }

  input {
    appearance: none;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: var(--size-9);
    height: var(--size-5);
    background: var(--color-bg-secondary);
    transition: background 300ms ease;
    border-radius: var(--radius-full);
    cursor: pointer;
  }

  .thumb {
    position: absolute;
    content: '';
    width: var(--size-4);
    height: var(--size-4);
    left: 2px;
    bottom: 2px;
    background: var(--color-text);
    transition: transform 300ms var(--easing-standard);
    border-radius: var(--radius-full);
  }

  input:checked + .switch {
    background: var(--color-primary);
    & .thumb {
      transform: translateX(100%);
    }
  }

  .label {
    display: block;
    font: var(--text-sm);
    font-weight: var(--weight-medium);
    margin-left: var(--size-2);
    transform: translateY(-3%);
  }
</style>

<label class="wrapper {$$props.class || ''}">
  <input type="checkbox" bind:checked on:input />
  <div class="switch">
    <span class="thumb" />
  </div>
  <span class="label --text-ui">
    {label}
  </span>
</label>
