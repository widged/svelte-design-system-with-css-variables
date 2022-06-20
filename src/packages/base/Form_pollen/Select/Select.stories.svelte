<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import Select from './Select.svelte';
</script>

<Meta title="Form/Select" component={Select} />

<Template let:args>
  <Select {...args} />
</Template>

<Story
  name="Default"
  args={{
    placeholder: 'Choose a gallery...',
    items: ['Portraits', 'Street', 'Landscape']
  }}
/>

<Story
  name="With Images"
  args={{
    placeholder: 'Choose a gallery...',
    items: [
      {
        image: 'https://source.unsplash.com/random',
        label: 'Portraits',
        value: 'portraits'
      },
      {
        image: 'https://source.unsplash.com/random',
        label: 'Street',
        value: 'street'
      },
      {
        image: 'https://source.unsplash.com/random',
        label: 'Landscape',
        value: 'landscape'
      }
    ]
  }}
/>
