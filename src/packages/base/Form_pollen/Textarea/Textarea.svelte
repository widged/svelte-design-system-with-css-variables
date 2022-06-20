<!--
### Textarea form input
 -->
<script lang="ts">
  import autosize from 'autosize';
  import { onMount } from 'svelte';
  import Field from '../Field/Field.svelte';

  export let value: any | undefined = undefined;

  const { label, error, class: className, ...rest } = $$restProps;
  let textarea: HTMLTextAreaElement;

  onMount(() => {
    autosize(textarea);
  });
</script>

<Field {label} {error} let:id class={className || ''}>
  <textarea
    bind:this={textarea}
    bind:value
    on:change
    on:input
    on:blur
    class="--input"
    {id}
    {...rest}
  />
</Field>
