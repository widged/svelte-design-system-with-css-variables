<script lang="ts">
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Input from './Input.svelte';
</script>

<Meta title="Form/Input" component={Input} />

<Template let:args>
  <Input {...args} />
</Template>

<Story name="Default" args={{ label: 'Name', placeholder: 'Jane Smith' }} />
