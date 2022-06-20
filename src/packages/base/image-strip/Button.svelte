<script context="module">
  export const intents = {
    primary: 'primary',
    secondary: 'secondary',
    tertiary: 'tertiary',
  };

  export const types = {
    submit: 'submit',
    reset: 'reset',
    button: 'tertiary',
  };

  export const ARROW = {
    '->': '->',
    '<-': '<-',
  };

  const arrow_i = `<svg
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
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
  </svg>`;
</script>

<script>
  /** Visual theme of the button  */
  export let intent = 'primary';
  /** Whether button is a danger button */
  export let danger = false;
  /** Whether button is a highlighted button */
  export let highlight = false;
  /** Optional navigation arrow  */
  export let withArrow = undefined;
  /** Optional SVG icon */
  export let icon = '';
  /** Make buttons 100% width blocks on mobile */
  export let responsive = false;
  /** Standard disabled attribute */
  export let disabled = false;
  /** Whether button is busy */
  export let busy = false;
  /** Whether to make it a fat button */
  export let fat = false;
  /** Optional button type submit -reset - button */
  export let type = '';

  const asString = (d) => (d && d.length ? d : undefined);
</script>

<button
  class="button --text-ui {intent} {responsive ? 'responsive' : ''} {$$props.class || ''}"
  type={asString(type)}
  class:busy
  class:fat
  class:disabled
  class:danger
  class:highlight
  class:reversed={withArrow === '<-'}
  on:click
  on:keydown
>
  {#if icon}
    <span class="icon">{@html icon}</span>
  {/if}
  <div class="content">
    <slot />
  </div>
  {#if asString(withArrow)}
    <span class="arrow">
      {@html arrow_i}
    </span>
  {/if}
</button>

<style>
  .button {
    display: inline-flex;
    align-items: center;
    padding: var(--size-3);
    border-radius: var(--radius-sm);
    transition: all 250ms var(--easing-standard);
    cursor: pointer;
    box-shadow: var(--shadow-xs);
  }
  .button.reversed {
    flex-direction: row-reverse;
  }

  @media not all and (min-width: 480px) {
    .button.responsive {
      display: flex;
      width: 100%;
    }
  }

  .content {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex: 1;
    white-space: nowrap;
  }

  .icon {
    margin-right: var(--size-2);
  }

  .icon :global(svg) {
    stroke: currentColor;
    height: var(--size-4);
    width: var(--size-4);
  }

  .arrow :global(svg) {
    width: var(--size-4);
    height: var(--size-4);
    margin-left: var(--size-1);
  }

  .reversed .arrow {
    transform: rotate(180deg);
  }

  /* primary */
  .button.primary {
    color: var(--color-text);
    background: var(--color-bg-secondary);
  }

  /* secondary */

  .button.secondary {
    border: 1px solid var(--color-border);
    color: var(--color-text-secondary);
  }

  .button.secondary:hover {
    color: var(--color-text);
    border-color: var(--color-text-secondary);
  }

  /* tertiary */

  .button.tertiary {
    color: var(--color-text-secondary);
    padding: 0;
  }

  .button.tertiary:hover {
    color: var(--color-text);
  }

  /* disabled */
  .button.primary.disabled {
    color: var(--color-text);
    opacity: 0.5;
  }
  .button.secondary.disabled {
    color: var(--color-text-tertiary);
    border-color: var(--color-border-secondary);
  }
  .button.tertiary.disabled {
    color: var(--color-text-tertiary) !important;
  }

  /* highlight */
  .button.primary.highlight {
    background: var(--color-primary);
  }
  .button.secondary.highlight {
    color: var(--color-primary);
    border-color: currentColor;
  }
  .button.tertiary.highlight {
    color: var(--color-primary);
  }
  .button.tertiary.highlight:hover {
    color: var(--color-primary-700);
  }

  /* danger */
  .button.primary.danger {
    background: var(--intent-danger);
  }
  .button.primary.danger :hover {
    background: var(--intent-danger-loud);
  }
  .button.secondary.danger {
    color: var(--intent-danger);
    border-color: var(--intent-danger);
  }
  .button.tertiary.danger {
    color: var(--intent-danger);
  }
  .button.tertiary.danger:hover {
    color: var(--intent-danger-loud);
  }

  /* States */
  .button.fat {
    padding: var(--size-4);
  }

  .button.busy,
  .button.disabled {
    pointer-events: none;
    cursor: default;
  }

  .button.busy {
    opacity: 0.5;
  }
</style>
