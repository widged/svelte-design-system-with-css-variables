<!--
### Form checkbox input
 -->
<script lang="ts">
  export let label: string;
</script>

<style lang="postcss">
  .wrapper {
    display: flex;
    align-items: center;
  }

  input {
    appearance: none;
    display: grid;
    place-content: center;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    width: var(--size-4);
    height: var(--size-4);
    transition: border-color 150ms ease;
    cursor: pointer;
    &::before {
      content: '';
      display: block;
      background: var(--color-primary);
      width: var(--size-4);
      height: var(--size-4);
      border-radius: var(--radius-sm);
      transform: scale(0);
      opacity: 0;
      transition: all 150ms ease;
    }
    &:checked {
      border-color: var(--color-primary);
    }
    &:checked::before {
      transform: scale(0.5);
      opacity: 1;
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
  <input type="checkbox" {...$$restProps} />
  <span class="label --text-ui">
    {label}
  </span>
</label>
