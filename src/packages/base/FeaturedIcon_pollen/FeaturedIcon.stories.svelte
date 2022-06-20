<script lang="ts">
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import FeaturedIcon from './FeaturedIcon.svelte';
  import image from 'lucide-static/icons/image.svg';
</script>

<Meta title="FeaturedIcon" component={FeaturedIcon} />

<Template let:args>
  <FeaturedIcon {...args} />
</Template>

<Story name="Default" args={{ icon: image }} />
