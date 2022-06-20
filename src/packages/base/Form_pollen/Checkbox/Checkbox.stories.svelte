<script lang="ts">
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Checkbox from './Checkbox.svelte';
</script>

<Meta title="Form/Checkbox" component={Checkbox} />

<Template let:args>
  <Checkbox {...args} />
</Template>

<Story name="Default" args={{ label: 'Show next to my logo' }} />
