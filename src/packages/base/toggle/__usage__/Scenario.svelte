<script>
  import Toggle from '../';
</script>

<h5>✦ default</h5>
<Toggle />
<h5>✦ labels defined</h5>
<Toggle labels={['on', 'off']} />
<h5>✦ labels are in the wrong format</h5>
<Toggle labels="wrong format" />
<h5>✦ disabled</h5>
<Toggle disabled={true} />
<h5>✦ style overwrite</h5>
<Toggle style="--color-bg: red" />
