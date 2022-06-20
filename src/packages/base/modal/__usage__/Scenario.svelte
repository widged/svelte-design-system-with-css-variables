<script>
  import Modal from '../';
</script>

<div class="px-8">
  <h1>Scenario -- label defined</h1>
  <Modal open={true}>
    <div style="padding: var(--size-12)">
      <h1 style="font: var(--display-sm)">Hello, world</h1>
    </div>
  </Modal>
</div>

<style>
  :root {
    --grey-300: #d4d7dd;

    --blur-md: blur(16px);
    --color-bg: var(--grey-300);
    --black-opacity: rgba(16, 24, 28, 0.9);
    --desktop: (min-width: 1024px);
    --grid-page-gutter: 5vw;
    --layer-top: 2147483647;
    --modal-radius: 4px;
    --radius-sm: 4px;
    --modal-width: 1140px;
    --width-md: 768px;
  }

  h1 {
    font-size: 14px;
    color: blue;
  }
</style>
