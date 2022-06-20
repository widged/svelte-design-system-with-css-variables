<script lang="ts">
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Textarea from './Textarea.svelte';
</script>

<Meta title="Form/Textarea" component={Textarea} />

<Template let:args>
  <Textarea {...args} />
</Template>

<Story
  name="Default"
  args={{ label: 'Message', placeholder: 'Start typing...' }}
/>
