<script>
  import Button from './Button.svelte';
  import Toast, { toast } from '../';
</script>

<div class="px-8">
  <h1>Scenario -- label defined</h1>
  <Toast />
  <div>
    <Button on:click={() => toast.info({ title: 'Hello world', message: 'How do you do?' })}
      >Trigger toast</Button
    >
  </div>
</div>

<style>
  :root {
    --size-1: 4px;
    --pad-sm: 10px;
    --color-text: white;
    --color-bg-secondary: #2c7a7b;
    --radius-full: 9999px;
  }

  h1 {
    font-size: 14px;
    color: blue;
  }
</style>
