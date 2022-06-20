<script lang="ts">
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import SocialButton from './SocialButton.svelte';
</script>

<Meta title="SocialButton" component={SocialButton}/>

<Template let:args>
  <SocialButton {...args}/>
</Template>

<Story name="Default" />

