<script lang="ts">
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import DataList from './DataList.svelte';
</script>

<Meta title="DataList" component={DataList} />

<Template let:args>
  <div style="max-width: 20rem">
    <DataList {...args} />
  </div>
</Template>

<Story
  name="Default"
  args={{
    label: 'Metadata',
    data: [
      { label: 'Type', value: 'JPEG' },
      {
        label: 'Resolution',
        value: '1917 × 2874'
      },
      { label: 'Size', value: '2.9MB' }
    ]
  }}
/>
