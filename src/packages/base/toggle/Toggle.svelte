<script>
  export let checked = false;
  export let labels = [null, null];
  export let style = null;
  let [onTxt, offTxt] = Array.isArray(labels) && labels.length == 2 ? labels : [null, null];
  export let disabled = false;
</script>

<section class:disabled {style}>
  <label>
    <input type="checkbox" bind:checked on:change {disabled} />
    <i class:checked>
      <b />
    </i>
    {#if onTxt && offTxt}
      <p>{checked ? onTxt : offTxt}</p>
    {/if}
  </label>
</section>

<style>
  section {
    --prose-size: 1rem;
    --align: left;
    --color-bg: #eee;
    --color-bg-checked: #32b0a2;
    --border-top: none;
    --border-bottom: none;
    --padding: 0;
    --margin: 0;
  }
  section {
    position: relative;
    font-size: var(--prose-size);
    text-align: var(--align);
    border-top: var(--border-top);
    border-bottom: var(--border-bottom);
    padding: var(--padding);
    margin: var(--margin);
  }
  section.disabled {
    pointer-events: none;
  }

  input {
    border: 0;
    clip: rect(0 0 0 0);
    height: auto;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
  }
  label {
    cursor: pointer;
    position: relative;
  }
  label,
  p,
  i,
  b {
    display: inline-block;
    vertical-align: middle;
  }
  i {
    position: relative;
    top: -0.125em;
    width: 2.8125em;
    height: 1.875em;
    background-color: var(--color-bg);
    border: 0.0625em solid rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    transition: 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transition-property: background-color, border-color;
  }
  i.checked {
    background-color: var(--color-bg-checked);
  }

  label input:checked ~ i {
    border-color: rgba(0, 0, 0, 0.05);
  }
  i + p {
    margin-left: 0.375em;
  }
  b {
    position: absolute;
    top: 0;
    right: 0.9375em;
    bottom: 0;
    left: 0;
    margin: 2px;
    background-color: white;
    border-radius: 100%;
    transition: 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transition-property: left, right;
    transition-delay: 0s, 0.05s;
  }
  label input:checked ~ i > b {
    right: 0;
    left: 0.9375em;
    transition: 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transition-property: left, right;
    transition-delay: 0.05s, 0s;
  }
</style>
