<script>
  import Dropdown from '../';
</script>

<div class="px-8">
  <h1>Scenario 2 -- label defined</h1>
  <Dropdown>a</Dropdown>
</div>

<style>
  :root {
    --gray-300: #d4d7dd;
    --gray-600: #555d6e;
    --color-bg-tertiary: var(--gray-300);
    --color-text: var(--gray-600);
    --color-text-secondary: var(--gray-600);
    --easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
    --elevation-1: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

    --elevation-xs: var(--elevation-1);
    --layer-top: 2147483647;
    --radius-xs: 3px;
    --size-3: 12px;
    --size-4: 16px;
    --size-5: 20px;
  }

  h1 {
    font-size: 14px;
    color: blue;
  }
</style>
