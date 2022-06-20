<!--
### Form field with label
 -->
<script lang="ts">
  import { randomId } from '../../../lib/utils';

  /** Optional label */
  export let label: string | undefined = undefined;
  /** Optional error message */
  export let error: string | null | undefined = undefined;
  /** Layout of the field */
  export let layout: 'normal' | 'error-below' = 'normal';

  let id = randomId();
</script>

<style>
  .labelWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--size-2);
  }

  label {
    font: var(--text-sm);
    font-weight: var(--weight-medium);
    color: var(--color-text-secondary);
    margin-right: var(--size-6);
    white-space: nowrap;
  }

  .error {
    font: var(--text-xs);
    color: var(--color-error);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .error-below {
    display: flex;
    justify-content: flex-end;
    margin-top: var(--size-2);
  }
</style>

<div class={$$props.class || ''}>
  {#if label || (error && layout !== 'error-below')}
    <div class="labelWrapper">
      <label for={id}>{label || ''}</label>
      {#if layout !== 'error-below'}
        <span class="error">{error || ''}</span>
      {/if}
    </div>
  {/if}
  <slot {id} />
  {#if error && layout === 'error-below'}
    <div class="error-below">
      <span class="error">{error || ''}</span>
    </div>
  {/if}
</div>
