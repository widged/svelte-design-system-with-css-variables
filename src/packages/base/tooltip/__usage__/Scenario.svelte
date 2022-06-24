<script>
  import Tooltip, { POS, SIZE } from '..';
</script>

<div>
  <h4>default</h4>
  <Tooltip tip="Whats up!">Hover me!</Tooltip>
  <h4>always visible</h4>
  <Tooltip tip="Whats up!" pos={POS.right} visible={true}>Hover me!</Tooltip>
  <h4>no animation</h4>
  <Tooltip tip="Whats up!" pos={POS.right} blunt={true}>Hover me!</Tooltip>
  <h4>long</h4>
  <Tooltip tip="Some rather long text" pos={POS.down} size={SIZE.large}>Hover long!</Tooltip>
  <h4>x</h4>
  <Tooltip tip="Whats up!" pos={POS.right}>Hover me!</Tooltip>
  <h4>x</h4>
  <Tooltip tip="Whats up!" pos={POS.upLeft}>Hover me!</Tooltip>
  <h4>overwrite style</h4>
  <Tooltip tip="Whats up!" pos={POS.upLeft} style="--color-bg: red;">Hover me!</Tooltip>
</div>
