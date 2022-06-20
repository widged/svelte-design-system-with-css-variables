<script>
  import FeaturedIcon from '../';
  import image from './image.svg';
</script>

<div class="px-8">
  <h1>Scenario -- label defined</h1>
  <FeaturedIcon icon={image} asImg={true} />
</div>

<style>
  :root {
    --size-1: 4px;
    --pad-sm: 10px;
    --color-text: white;
    --color-bg-secondary: #2c7a7b;
    --radius-full: 9999px;
    --background: #2c7a7b;

    --grey-300: #d4d7dd;
    --grey-600: #555d6e;
    --grey-700: #3f4754;
    --color-bg-tertiary: var(--grey-300);
    --border: px solid var(--color-bg-tertiary);
    --color: black;
    --mobile: (min-width: 480px);
    --radius-100: 100%;
    --size-11: 44px;
    --size-12: 48px;
    --size-4: 16px;
    --size-5: 20px;
  }

  h1 {
    font-size: 14px;
    color: blue;
  }
</style>
