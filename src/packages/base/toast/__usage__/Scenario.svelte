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
    <Button on:click={() => toast.success({ title: 'Hello world', message: 'How do you do?' })}
      >Trigger success</Button
    >
    <Button on:click={() => toast.error({ title: 'Hello world', message: 'How do you do?' })}
      >Trigger error</Button
    >
  </div>
</div>

<style>
  :root {
    --icon-border: x;
    --radius-100: x;
    --radius-sm: x;
    --size-1: 4px;
    --size-3: 12px;
    --size-4: 16px;
    --size-6: 24px;
    --size-8: 32px;

    --grey-400: #a5aab4;
    --grey-600: #555d6e;

    --intent-error-500: #f04438;
    --intent-error-700: #b42318;
    --intent-error: var(--intent-error-500);
    --intent-success-500: #12b76a;
    --intent-success-700: #027a48;
    --intent-success: var(--intent-success-500);

    --easing-decelerate: cubic-bezier(0, 0, 0.2, 1);
    --easing-accelerate: cubic-bezier(0.4, 0, 1, 1);

    --elevation-1: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --elevation-xs: var(--elevation-1);
    --grid-page-gutter: 5vw;

    --text-color: black;
    --scale-00: 0.875rem;
    --text-sm: var(--scale-00) / 1.5;
    --weight-medium: 500;
    --width-xs: 480px;
  }

  h1 {
    font-size: 14px;
    color: blue;
  }
</style>
