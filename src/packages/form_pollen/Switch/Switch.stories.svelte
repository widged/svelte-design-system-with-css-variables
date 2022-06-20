<script lang="ts">
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Switch from './Switch.svelte';
</script>

<Meta title="Form/Switch" component={Switch} />

<Template let:args>
  <Switch {...args} />
</Template>

<Story name="Default" args={{ label: 'Show photo name' }} />
