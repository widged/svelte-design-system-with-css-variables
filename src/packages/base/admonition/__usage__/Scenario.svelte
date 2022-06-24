<script>
  import Admonition, { MODES } from '../';
</script>

<section>
  <h5>✦ default</h5>
  <Admonition mode={MODES.neutral}>A simple basic info alert with text</Admonition>

  <h4>✦ danger</h4>
  <Admonition mode={MODES.danger} title="Alert">A simple basic info alert with text</Admonition>
  <h4>✦ info</h4>
  <Admonition mode={MODES.info}>A simple basic info alert with text</Admonition>
  <h4>✦ warning</h4>
  <Admonition mode={MODES.warning}>A simple basic info alert with text</Admonition>
  <h4>✦ success</h4>
  <Admonition mode={MODES.success}>A simple basic info alert with text</Admonition>
  <h4>✦ custom</h4>
  <Admonition mode={[308, '93%', '94%']}>A simple basic info alert with text</Admonition>
</section>

<style>
  section {
    width: 400px;
  }
</style>
