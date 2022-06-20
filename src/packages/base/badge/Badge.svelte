<!--
### Simple visual badge/pill
 -->
<script>
  /** Label of the badge */
  export let label;
</script>

<span class="badge --text-ui {$$props.class || ''}">{label}</span>

<style>
  .badge {
    display: inline-block;
    padding: var(--size-1) var(--pad-sm);
    background: var(--color-bg-secondary);
    border-radius: var(--radius-full);
    color: var(--color-text);
  }
</style>
