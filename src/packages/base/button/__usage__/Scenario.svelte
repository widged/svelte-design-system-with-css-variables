<script>
  import Button, { intents } from '../Button.svelte';
</script>

<div class="px-8">
  <h1>Scenario -- default</h1>
  <Button>Click me</Button>
  <h1>Scenario -- Arrow -&gt;</h1>
  <Button withArrow="->">Click me</Button>
  <h1>Scenario -- Arrow &lt;-</h1>
  <Button withArrow="<-">Click me</Button>
  <h1>Scenario -- Disabled</h1>
  <Button disabled={true}>Click me</Button>
  <h1>Scenario -- Highlight</h1>
  <Button highlight={true}>Click me</Button>
  <h1>Scenario -- Busy</h1>
  <Button busy={true}>Click me</Button>
  <h1>Scenario -- Fat</h1>
  <Button fat={true}>Click me</Button>
  <h1>Scenario -- Danger</h1>
  <Button danger={true}>Click me</Button>
  <h1>Scenario -- Secondary</h1>
  <Button intent={intents.secondary}>Click me</Button>
  <h1>Scenario -- Tertiary</h1>
  <Button intent={intents.tertiary}>Click me</Button>
</div>

<style>
  :root {
    --size-1: 4px;
    --size-2: 8px;
    --size-3: 12px;
    --size-4: 16px;
    --radius-sm: 4px;
    --easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
    --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

    --intent-error-500: #f04438;
    --intent-error-700: #b42318;
    --intent-danger: var(--intent-error-500);
    --intent-danger-loud: var(--intent-error-700);

    --color-text: white;
    --color-border: var(---grey-300);

    --color-text-secondary: black;
    --color-bg-secondary: #ed8936;
    --color-border-secondary: #dd6b20;

    --color-text-tertiary: black;
    --color-bg-tertiary: #805ad5;
    --color-border-tertiary: #6b46c1;
  }

  h1 {
    font-size: 14px;
    color: blue;
  }
</style>
