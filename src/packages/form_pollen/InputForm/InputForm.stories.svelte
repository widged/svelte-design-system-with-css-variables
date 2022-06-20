<script lang="ts">
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import InputForm from './InputForm.svelte';
</script>

<Meta title="InputForm" component={InputForm}/>

<Template let:args>
  <InputForm {...args}/>
</Template>

<Story name="Default" />

