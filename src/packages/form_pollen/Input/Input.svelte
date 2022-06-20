<!--
### Form input
 -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { ValidityErrors } from '../../../@types/input';
  import Field from '../Field/Field.svelte';

  /** Value of the input */
  export let value: any | undefined = undefined;
  /** Optional explicit error to display */
  export let error: string | null | undefined = undefined;
  /** Optional custom validity error messages */
  export let errorMessages: ValidityErrors | undefined = undefined;
  /** Optional input label */
  export let inputLabel: string | undefined = undefined;
  /** Optional busy state */
  export let busy: boolean | undefined = false;

  let invalid: string | null | undefined;

  const { label, layout, class: className, ...rest } = $$restProps,
    event = createEventDispatcher();

  function validate(e: Event) {
    const target = e.target as HTMLInputElement,
      valid = (target as HTMLInputElement)?.checkValidity();

    event('input', {
      target: e.target
    });

    if (valid) {
      value = target.value;
      invalid = null;
      error = null;
    } else {
      for (let i in target.validity) {
        if (i !== 'valid' && (target.validity as any)[i] === true) {
          invalid = i;
        }
      }
    }
  }

  function checkError(e: Event) {
    const target = e.target as HTMLInputElement;

    error = invalid
      ? (errorMessages && errorMessages[invalid as keyof ValidityState]) ||
        target.validationMessage
      : '';
  }
</script>

<style>
  .input-wrap {
    display: flex;
    border: 1px solid var(--color-border-secondary);
    border-radius: var(--radius-sm);
  }

  input {
    line-height: var(--line-none);
    border: none;
    flex: 1;
    transition: opacity 200ms var(--easing-standard);
  }

  input.busy {
    opacity: 0.5;
  }

  .input-label {
    color: var(--color-text-secondary);
    padding: var(--size-3) var(--size-4);
    border-left: 1px solid var(--color-grey-800);
  }
</style>

<Field {label} {layout} {error} let:id class={className || ''}>
  <div class="input-wrap">
    <input
      class="--input"
      class:busy
      {id}
      {value}
      on:input={validate}
      on:blur={checkError}
      on:change
      {...rest}
    />
    {#if inputLabel}
      <span class="input-label">{inputLabel}</span>
    {/if}
  </div>
</Field>
