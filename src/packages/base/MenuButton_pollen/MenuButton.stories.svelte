<script lang="ts">
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import MenuButton from './MenuButton.svelte';
  import imageIcon from 'lucide-static/icons/image.svg';
</script>

<Meta title="MenuButton" component={MenuButton} />

<Template let:args>
  <MenuButton {...args} />
</Template>

<Story name="Default" args={{ icon: imageIcon, label: 'Photos' }} />
