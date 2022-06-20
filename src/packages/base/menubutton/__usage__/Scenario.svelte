<script>
  import MenuButton from '../';
  const imageIcon = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
  <circle cx="9" cy="9" r="2" />
  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
</svg>
`;
</script>

<div class="px-8">
  <h1>Scenario</h1>
  <MenuButton icon={imageIcon} label="Photos" />
</div>

<style>
  :root {
    --grey-100: #f2f4f5;
    --grey-300: #d4d7dd;
    --grey-600: #555d6e;
    --color-bg-tertiary: var(--grey-300);

    --color-text-secondary: var(--grey-600);
    --easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
    --line-none: 1;
    --pad-sm: 10px;
    --radius-sm: 4px;
    --size-1: 4px;
    --size-2: 8px;
    --size-5: 20px;
    --scale-00: 0.875rem;

    --text-sm: var(--scale-00) / 1.5;
    --weight-medium: 500;
  }

  h1 {
    font-size: 14px;
    color: blue;
  }
</style>
