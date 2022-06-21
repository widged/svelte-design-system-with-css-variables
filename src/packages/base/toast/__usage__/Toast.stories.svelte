<script lang="ts">
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Button from '../Button/Button.svelte';
  import Toast, { toast } from './Toast.svelte';
</script>

<Meta title="Toast" component={Toast} />

<Template let:args>
  <Toast {...args} />
  <div>
    <Button
      on:click={() =>
        toast.info({ title: 'Hello world', message: 'How do you do?' })}
      >Trigger toast</Button
    >
  </div>
</Template>

<Story name="Default" />
