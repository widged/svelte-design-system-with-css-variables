<script>
  import DataList from '../';
  const records = [
    { label: 'Type', value: 'JPEG' },
    {
      label: 'Resolution',
      value: '1917 × 2874',
    },
    { label: 'Size', value: '2.9MB' },
  ];
</script>

<div class="px-8">
  <h1>Scenario -- label defined</h1>
  <DataList label="Metadata" {records} />
</div>

<style>
  :root {
    --color-text: #14141b;
    --color-bg-secondary: #14141b;
    --color-text-secondary: #555d6e;
    --easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
    --size-1: 4px;
    --size-2: 8px;
    --size-4: 16px;
    --text-sm: 0.875rem / 1.5;
    --weight-medium: 500;
  }

  h1 {
    font-size: 14px;
    color: blue;
  }
</style>
