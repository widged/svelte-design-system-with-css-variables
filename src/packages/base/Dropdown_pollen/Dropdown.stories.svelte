<script lang="ts">
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Dropdown from './Dropdown.svelte';
</script>

<Meta title="Dropdown" component={Dropdown}/>

<Template let:args>
  <Dropdown {...args}/>
</Template>

<Story name="Default" />

