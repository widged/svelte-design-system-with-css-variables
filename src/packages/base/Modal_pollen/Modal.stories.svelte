<script lang="ts">
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Modal from './Modal.svelte';
</script>

<Meta title="Modal" component={Modal} />

<Template let:args>
  <Modal {...args}>
    <div style="padding: var(--size-12)">
      <h1 style="font: var(--display-sm)">Hello, world</h1>
    </div>
  </Modal>
</Template>

<Story name="Default" args={{ open: true }} />
