<script>
  import SomeComponent from '../SomeComponent.svelte';
</script>

<div class="px-8">
  <h1>Scenario 1 -- name left undefined</h1>
  <SomeComponent />
  <h1>Scenario -- name defined</h1>
  <SomeComponent name="there" />
</div>

<style>
  h1 {
    font-size: 14px;
    color: blue;
  }
</style>
