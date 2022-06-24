<script context="module">
  export const MODES = {
    danger: [0, '93%', '94%'],
    info: [214, '95%', '93%'],
    success: [149, '80%', '90%'],
    warning: [48, '96%', '89%'],
    neutral: [220, '14%', '96%'],
  };
</script>

<script>
  export let mode = MODES.neutral;
  export let title;
  export let style = '';
  let [h, s, l] = mode;
</script>

<section style="--h: {h};--s: {s};--l: {l};" role="alert">
  {#if title}
    <h2>{title}</h2>
  {/if}
  <slot />
</section>

<style>
  section {
    --h: 220;
    --s: 14%, 
    --l: 96%;
  }
  section {
    padding: 1.25rem;
    background-color: hsl(var(--h), var(--s), calc(var(--l) * 1));
    color: hsl(var(--h), var(--s), calc(var(--l) * 0.4));
    line-height: 1.5;
    border-radius: 0.5rem;
  }
  h2 {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
  }
</style>
