<script>
  import Masonry from '../';
  const items = [
    { id: 1, name: 'Milk', done: false },
    { id: 2, name: 'Bread', done: true },
    { id: 3, name: 'Eggs', done: false },
  ];
</script>

<div class="px-8">
  <h1>Scenario -- label defined</h1>
  <Masonry {items} />
</div>

<style>
  :root {
    --size-1: 4px;
    --pad-sm: 10px;
    --color-text: white;
    --color-bg-secondary: #2c7a7b;
    --radius-full: 9999px;
  }

  h1 {
    font-size: 14px;
    color: blue;
  }
</style>
