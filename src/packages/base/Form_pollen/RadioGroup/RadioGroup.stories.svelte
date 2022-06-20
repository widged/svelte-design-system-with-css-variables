<script lang="ts">
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import RadioGroup from './RadioGroup.svelte';
  import sunIcon from 'lucide-static/icons/sun.svg';
  import moonIcon from 'lucide-static/icons/moon.svg';
</script>

<Meta title="Form/RadioGroup" component={RadioGroup} />

<Template let:args>
  <div style="max-width: 30rem">
    <RadioGroup {...args} />
  </div>
</Template>

<Story
  name="Default"
  args={{
    label: 'Mode',
    name: 'mode',
    options: [
      { label: 'Light', value: 'light', icon: sunIcon },
      { label: 'Dark', value: 'dark', icon: moonIcon }
    ]
  }}
/>
