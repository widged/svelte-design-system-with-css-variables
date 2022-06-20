<script>
  import ImageStrip from '../';

  const images = [
    {
      id: '1',
      src: 'https://assets.imgix.net/unsplash/vintagecameras.jpg',
    },
    {
      id: '2',
      src: 'https://assets.imgix.net/unsplash/paperlamp.jpg',
    },
    {
      id: '3',
      src: 'https://assets.imgix.net/unsplash/motorbike.jpg',
    },
    {
      id: '4',
      src: 'https://assets.imgix.net/unsplash/citystreet.jpg',
    },
    {
      id: '5',
      src: 'https://assets.imgix.net/unsplash/transport.jpg',
    },
    {
      id: '6',
      src: 'https://assets.imgix.net/unsplash/bridge.jpg ',
    },
    {
      id: '7',
      src: 'https://assets.imgix.net/unsplash/vintagecameras.jpg',
    },
    {
      id: '8',
      src: 'https://assets.imgix.net/unsplash/paperlamp.jpg',
    },
    {
      id: '9',
      src: 'https://assets.imgix.net/unsplash/motorbike.jpg',
    },
    {
      id: '10',
      src: 'https://assets.imgix.net/unsplash/citystreet.jpg',
    },
    {
      id: '11',
      src: 'https://assets.imgix.net/unsplash/transport.jpg',
    },
    {
      id: '12',
      src: 'https://assets.imgix.net/unsplash/bridge.jpg ',
    },
    {
      id: '13',
      src: 'https://assets.imgix.net/unsplash/vintagecameras.jpg',
    },
    {
      id: '14',
      src: 'https://assets.imgix.net/unsplash/paperlamp.jpg',
    },
    {
      id: '15',
      src: 'https://assets.imgix.net/unsplash/motorbike.jpg',
    },
    {
      id: '16',
      src: 'https://assets.imgix.net/unsplash/citystreet.jpg',
    },
    {
      id: '17',
      src: 'https://assets.imgix.net/unsplash/transport.jpg',
    },
    {
      id: '18',
      src: 'https://assets.imgix.net/unsplash/bridge.jpg ',
    },
    {
      id: '19',
      src: 'https://assets.imgix.net/unsplash/vintagecameras.jpg',
    },
    {
      id: '20',
      src: 'https://assets.imgix.net/unsplash/paperlamp.jpg',
    },
    {
      id: '21',
      src: 'https://assets.imgix.net/unsplash/motorbike.jpg',
    },
    {
      id: '22',
      src: 'https://assets.imgix.net/unsplash/citystreet.jpg',
    },
    {
      id: '23',
      src: 'https://assets.imgix.net/unsplash/transport.jpg',
    },
    {
      id: '24',
      src: 'https://assets.imgix.net/unsplash/bridge.jpg ',
    },
    {
      id: '25',
      src: 'https://assets.imgix.net/unsplash/vintagecameras.jpg',
    },
    {
      id: '26',
      src: 'https://assets.imgix.net/unsplash/paperlamp.jpg',
    },
    {
      id: '27',
      src: 'https://assets.imgix.net/unsplash/motorbike.jpg',
    },
    {
      id: '28',
      src: 'https://assets.imgix.net/unsplash/citystreet.jpg',
    },
    {
      id: '29',
      src: 'https://assets.imgix.net/unsplash/transport.jpg',
    },
    {
      id: '30',
      src: 'https://assets.imgix.net/unsplash/bridge.jpg ',
    },
  ];
</script>

<div class="px-8">
  <h1>Scenario -- label defined</h1>
  <ImageStrip {images} />
</div>

<style>
  :root {
    --size-1: 4px;
    --size-3: 12px;
    --size-8: 32px;
    --size-12: 48px;
    --grey-600: #555d6e;
    --scale-000: 0.75rem;

    --color-text-secondary: var(--grey-600);
    --grid-gap: var(--size-8);
    --gutter: var(--size-8);
    --text-xs: var(--scale-000) / 1.5;
  }

  h1 {
    font-size: 14px;
    color: blue;
  }
</style>
