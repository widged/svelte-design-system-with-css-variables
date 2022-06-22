<script context="module">
</script>

<script>
  /** Label to show on the box  */
  export let label;
  /** Optional SVG icon */
  export let icon;
  /** Whether the icon is checked or not  */
  export let checked = false;
  /** Standard disabled attribute */
  export let disabled = false;
</script>

<section class:disabled>
  <label>
    <input type="checkbox" {checked} {disabled} />
    <span class="tile">
      <i>{@html icon} </i>
      <b>{label}</b>
    </span>
  </label>
</section>

<style>
  section :where(*, *:after, *:before) {
    box-sizing: border-box;
  }

  section.disabled {
    opacity: 0.3;
  }

  b {
    font-style: normal;
    font-weight: 500;
    color: var(--color-prose);
    transition: 0.375s ease;
    text-align: center;
  }

  input {
    clip: rect(0 0 0 0);
    -webkit-clip-path: inset(100%);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  input:checked + .tile {
    border-width: 3px;
    border-color: var(--color-checked);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: var(--color-checked);
  }
  input:checked + .tile:before {
    transform: scale(1);
    opacity: 1;
    background-color: var(--color-checked);
    border-color: var(--color-checked);
  }
  input:checked + .tile i,
  input:checked + .tile b {
    color: var(--color-checked);
  }
  input:focus + .tile {
    border-color: var(--color-border);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 0 0 4px lightgray;
  }
  input:focus + .tile:before {
    transform: scale(1);
    opacity: 1;
  }

  .tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 7rem;
    min-height: 7rem;
    border-radius: 0.5rem;
    border: 2px solid var(--color-border);
    background-color: var(--color-bg);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transition: 0.15s ease;
    cursor: pointer;
    position: relative;
  }
  /* checkmark */
  .tile:before {
    content: '';
    position: absolute;
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid var(--color-border);
    background-color: var(--color-bg);
    border-radius: 50%;
    top: 0.25rem;
    left: 0.25rem;
    opacity: 0;
    transform: scale(0);
    transition: 0.25s ease;
    /* checkmark */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' fill='%23FFFFFF' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='none'%3E%3C/rect%3E%3Cpolyline points='216 72.005 104 184 48 128.005' fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'%3E%3C/polyline%3E%3C/svg%3E");
    background-size: 12px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  .tile:hover {
    border-width: 2px;
    border-color: hsl(from var(--color-border) h s calc(l + 5%));
  }
  input:checked + .tile:hover {
    border-width: 2px;
    border-color: hsl(from var(--color-checked) h s calc(l + 5%));
  }

  .tile:hover:before {
    transform: scale(1);
    opacity: 1;
  }

  i {
    transition: 0.375s ease;
    color: var(--color-border);
  }
  i :global(svg) {
    width: 3rem;
    height: 3rem;
  }
</style>
