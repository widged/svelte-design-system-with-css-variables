<script lang="ts">
  import chevronIcon from 'lucide-static/icons/chevron-down.svg';
</script>

<style lang="postcss">
  .icon {
    display: inline-flex;
    align-items: center;
    & :global(svg) {
      width: var(--size-4);
      height: var(--size-4);
      stroke: var(--color-text-secondary);
    }
  }
</style>

<span class="icon">{@html chevronIcon}</span>
