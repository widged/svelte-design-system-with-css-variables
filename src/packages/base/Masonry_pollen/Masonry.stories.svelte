<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import Masonry from './Masonry.svelte';
</script>

<Meta title="Masonry" component={Masonry} />

<Template let:args>
  <Masonry {...args} />
</Template>

<Story name="Default" />
