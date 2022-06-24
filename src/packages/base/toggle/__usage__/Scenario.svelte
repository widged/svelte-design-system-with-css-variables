<script>
  import Toggle from '../';
</script>

<section>
  <article>
    <h5>✦ default</h5>
    <Toggle />
    <h5>✦ checked</h5>
    <Toggle checked={true} />
  </article>
  <article>
    <h5>✦ disabled</h5>
    <Toggle disabled={true} />
    <h5>✦ style overwrite</h5>
    <Toggle style="--color-bg: #333333" />
  </article>
  <article>
    <h5>✦ labels are in the wrong format</h5>
    <Toggle labels="wrong format" />
    <h5>✦ labels in the correct format</h5>
    <Toggle labels={['on', 'off']} />
  </article>
</section>

<style>
  section {
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: space-around;
  }
  article {
  }
</style>
