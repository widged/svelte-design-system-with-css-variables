<script>
  import ImageHover, { BORDER, DELAY } from '../';
</script>

<h4>default</h4>
<ImageHover caption="Some Text" />
<h4>delay</h4>
<ImageHover delay={DELAY.d1000} caption="Some Text" />
<h4>style overwrite</h4>
<ImageHover style="--primary-color: red;--secondary-color: darkred" caption="Some Text" />

-->
