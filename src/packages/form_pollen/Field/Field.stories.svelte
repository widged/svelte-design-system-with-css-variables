<script lang="ts">
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Field from './Field.svelte';
</script>

<Meta title="Form/Field" component={Field} />

<Template let:args>
  <Field {...args}>Form element goes here...</Field>
</Template>

<Story name="Default" args={{ label: 'Label' }} />
<Story name="Error " args={{ label: 'Label', error: 'Error' }} />
