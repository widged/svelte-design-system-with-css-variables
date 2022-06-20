<!--
### Select form input
 -->
<script lang="ts">
  import SvelteSelect from 'svelte-select';
  import SelectIcon from './lib/SelectIcon.svelte';
  import SelectItem from './lib/SelectItem.svelte';
  import SelectSelection from './lib/SelectSelection.svelte';

  export let items: SvelteSelect['items'];
  export let value: SvelteSelect['value'];
  export let minimal: boolean | undefined = false;
  export let searchable: boolean | undefined = false;
</script>

<SvelteSelect
  showChevron
  isClearable={false}
  listOffset={8}
  isSearchable={searchable}
  Item={SelectItem}
  Selection={SelectSelection}
  ChevronIcon={SelectIcon}
  --height="var(--size-11)"
  --background="var(--color-bg)"
  --list-background="var(--color-bg)"
  --error-background="var(--color-bg)"
  --border={minimal ? 'none' : '1px solid var(--color-bg-tertiary)'}
  --border-hover-color="var(--color-bg-tertiary)"
  --border-focus-color="white"
  --border-radius="var(--radius-sm)"
  --input-color="var(--color-text)"
  --error-border="var(--color-error)"
  --list-border="1px solid var(--color-bg-tertiary)"
  --list-border-radius="var(--radius-sm)"
  --list-shadow="none"
  --placeholder-color="var(--color-grey-400)"
  --placeholder-opacity="1"
  --input-font-size="var(--scale-0)"
  --chevron-box-shadow="none"
  bind:value
  on:select
  {items}
  {...$$restProps}
/>
