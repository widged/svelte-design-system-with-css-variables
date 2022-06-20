<!--
### Single line form with an input and a button
 -->
<script lang="ts">
  import Button from '../../Button/Button.svelte';
  import Input from '../Input/Input.svelte';

  /** Value of the input */
  export let value: string;
  /** CTA for the button */
  export let cta: string;

  const { class: className, ...rest } = $$restProps;
</script>

<style>
  .form {
    display: flex;
    width: 100%;
    @media not all and (--tablet) {
      flex-direction: column;
    }
  }

  .input {
    flex: 1;
    margin-bottom: var(--size-3);
    @media (--tablet) {
      margin: 0 var(--size-2) 0 0;
    }
  }
</style>

<form class="form {className || ''}" on:submit|preventDefault>
  <div class="input">
    <Input bind:value {...rest} />
  </div>
  <Button type="submit" withArrow="forwards">{cta}</Button>
</form>
