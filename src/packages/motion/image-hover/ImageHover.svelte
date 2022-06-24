<!-- derived from https://github.com/ciar4n/Izmir/ MIT-->
<script context="module">
  export const BORDER = {
    center: 'center',
    bottom: 'bottom',
    'bottom-left': 'bottom-left',
    'bottom-right': 'bottom-right',
    'cc-1': 'cc-1',
    'cc-2': 'cc-2',
    'cc-3': 'cc-3',
    'ccc-1': 'ccc-1',
    'ccc-2': 'ccc-2',
    'ccc-3': 'ccc-3',
    'corners-1': 'corners-1',
    'corners-2': 'corners-2',
    fade: 'fade',
    horiz: 'horiz',
    left: 'left',
    right: 'right',
    top: 'top',
    'top-left': 'top-left',
    'top-right': 'top-right',
    vert: 'vert',
  };
  export const DELAY = {
    d100: '100',
    d1000: '1000',
    d200: '200',
    d300: '300',
    d400: '400',
    d500: '500',
    d600: '600',
    d700: '700',
    d800: '800',
    d900: '900',
  };
  export const FADE = {
    down: 'down',
    left: 'left',
    right: 'right',
    up: 'up',
  };
  export const FX = {
    blur: 'blur',
    'pan-down': 'pan-down',
    'pan-left': 'pan-left',
    'pan-right': 'pan-right',
    'pan-up': 'pan-up',
    'rotate-left': 'rotate-left',
    'rotate-right': 'rotate-right',
    'zoom-in': 'zoom-in',
    'zoom-out': 'zoom-out',
  };
  export const GRADIENT = {
    bottom: 'bottom',
    'bottom-left': 'bottom-left',
    'bottom-right': 'bottom-right',
    left: 'left',
    right: 'right',
    top: 'top',
    'top-left': 'top-left',
    'top-right': 'top-right',
  };
  export const LAY = {
    bottomCenter: 'bottom-center',
    bottomLeft: 'bottom-left',
    bottomRight: 'bottom-right',
    centerLeft: 'center-left',
    centerRight: 'center-right',
    topCenter: 'top-center',
    topLeft: 'top-left',
    topRight: 'top-right',
  };
  export const REVEAL = {
    down: 'down',
    left: 'left',
    right: 'right',
    up: 'up',
  };
  export const ROTATE = {
    'down-left': 'down-left',
    'down-right': 'down-right',
    'up-left': 'up-left',
    'up-right': 'up-right',
  };
</script>

<script>
  export let caption = '';
  export let border = BORDER.center;
  export let delay = null;
  export let fade = null;
  export let fx = 'zoom-out';
  export let gradient = 'top-right';
  export let lay = null;
  export let reveal = null;
  export let rotate = null;
  export let style = '--primary-color: #000046; --secondary-color: #1CB5E0; --border-width: 10px;';
</script>

<figure {border} {delay} {fade} {fx} {gradient} {lay} {reveal} {rotate} {style}>
  <img src="https://source.unsplash.com/1t8go-nyVyE/400x300" alt="Sample Image" />
  <figcaption>
    <h3>{caption}</h3>
  </figcaption>
</figure>

<style>
  figure {
    /* text color within the figcaption area. */
    --text-color: #ffffff;
    /* primary color as used on the hover image overlay. */
    --primary-color: #00b4db;
    /* secondary color as used as the to value on overlay gradients. */
    --secondary-color: #0083b0;
    /* padding of the figcaption area. */
    --padding: 1em;
    /* outside border radius of the image. */
    --border-radius: 3px;
    /* duration of the animation on hover. */
    --transition-duration: 600ms;
    /* distance between the animated border on hover and the outside edge of the element. */
    --border-margin: 15px;
    /* width (thickness) of the animated border on hover. */
    --border-width: 3px;
    /* color of the animated border on hover. */
    --border-color: #ffffff;
    /* ditto */
    --image-opacity: 0.25;
  }

  /* Izmir - ImageHover CSS LIbrary
    ----------------------------- */
  figure {
    display: inline-flex;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    margin: 0;
    padding: 0;
    color: #ffffff;
    color: var(--text-color);
    border-radius: 3px;
    border-radius: var(--border-radius);
  }
  figure:before,
  figure:after,
  figure *,
  figure *:before,
  figure *:after {
    box-sizing: border-box;
    transition: all 600ms ease;
    transition: all var(--transition-duration) ease;
  }
  figure figcaption {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1em;
    padding: var(--padding);
    width: 100%;
    z-index: 1;
  }
  figure img {
    object-fit: cover;
    max-width: 100%;
    width: 100%;
    height: 100%;
  }
  figure h1,
  figure h2,
  figure h3,
  figure h4,
  figure h5,
  figure h6,
  figure p {
    margin-top: 0;
    color: #ffffff;
    color: var(--text-color);
  }
  figure h1:last-child,
  figure h2:last-child,
  figure h3:last-child,
  figure h4:last-child,
  figure h5:last-child,
  figure h6:last-child,
  figure p:last-child {
    margin-bottom: 0;
  }

  /* border-*
     ----------------------------- */
  [border]:before,
  [border]:after,
  [border] figcaption:before,
  [border] figcaption:after {
    background-color: #ffffff;
    background-color: var(--border-color);
    position: absolute;
    content: '';
  }
  [border]:before,
  [border]:after {
    z-index: 1;
    height: 3px;
    height: var(--border-width);
    left: 15px;
    left: var(--border-margin);
    right: 15px;
    right: var(--border-margin);
    transform: scaleX(0);
  }
  [border]:before {
    top: 15px;
    top: var(--border-margin);
  }
  [border]:after {
    bottom: 15px;
    bottom: var(--border-margin);
  }
  [border] figcaption {
    z-index: 3;
  }
  [border] figcaption:before,
  [border] figcaption:after {
    z-index: -1;
    width: 3px;
    width: var(--border-width);
    top: 15px;
    top: var(--border-margin);
    bottom: 15px;
    bottom: var(--border-margin);
    transform: scaleY(0);
  }
  [border] figcaption:before {
    left: 15px;
    left: var(--border-margin);
  }
  [border] figcaption:after {
    right: 15px;
    right: var(--border-margin);
  }
  [border].hover:before,
  [border].hover:after,
  [border].hover figcaption:before,
  [border].hover figcaption:after,
  [border]:hover:before,
  [border]:hover:after,
  [border]:hover figcaption:before,
  [border]:hover figcaption:after,
  [border]:focus:before,
  [border]:focus:after,
  [border]:focus figcaption:before,
  [border]:focus figcaption:after,
  :focus > [border]:before,
  :focus > [border]:after,
  :focus > [border] figcaption:before,
  :focus > [border] figcaption:after {
    transform: scale(1);
  }

  /* border-center
    ----------------------------- */
  /* border-vert
    ----------------------------- */
  [border='vert']:before,
  [border='vert']:after {
    transition-duration: 0s;
  }
  [border='vert'].hover:before,
  [border='vert'].hover:after,
  [border='vert']:hover:before,
  [border='vert']:hover:after,
  [border='vert']:focus:before,
  [border='vert']:focus:after,
  :focus > [border='vert']:before,
  :focus > [border='vert']:after {
    transition-delay: 480ms;
  }

  /* border-horiz
    ----------------------------- */
  [border='horiz'] figcaption:before,
  [border='horiz'] figcaption:after {
    transition-duration: 0s;
  }
  [border='horiz'].hover figcaption:before,
  [border='horiz'].hover figcaption:after,
  [border='horiz']:hover figcaption:before,
  [border='horiz']:hover figcaption:after,
  [border='horiz']:focus figcaption:before,
  [border='horiz']:focus figcaption:after,
  :focus > [border='horiz'] figcaption:before,
  :focus > [border='horiz'] figcaption:after {
    transition-delay: 480ms;
  }

  /* border-bottom
    ----------------------------- */
  [border='bottom']:after {
    transition-delay: 480ms;
  }
  [border='bottom']:before,
  [border='bottom']:after {
    transition-duration: 0s;
  }
  [border='bottom'] figcaption:before,
  [border='bottom'] figcaption:after {
    transform-origin: 100% 100%;
  }
  [border='bottom'].hover:before,
  [border='bottom']:hover:before,
  [border='bottom']:focus:before,
  :focus > [border='bottom']:before {
    transition-delay: 480ms;
  }
  [border='bottom'].hover:after,
  [border='bottom']:hover:after,
  [border='bottom']:focus:after,
  :focus > [border='bottom']:after {
    transition-delay: 0s;
  }

  /* border-top
    ----------------------------- */
  [border='top']:before {
    transition-delay: 480ms;
  }
  [border='top']:before,
  [border='top']:after {
    transition-duration: 0s;
  }
  [border='top'] figcaption:before,
  [border='top'] figcaption:after {
    transform-origin: 0 0;
  }
  [border='top'].hover:after,
  [border='top']:hover:after,
  [border='top']:focus:after,
  :focus > [border='top']:after {
    transition-delay: 480ms;
  }
  [border='top'].hover:before,
  [border='top']:hover:before,
  [border='top']:focus:before,
  :focus > [border='top']:before {
    transition-delay: 0s;
  }

  /* border-right
    ----------------------------- */
  [border='right']:before,
  [border='right']:after {
    transform-origin: 100% 100%;
  }
  [border='right'] figcaption:after {
    transition-delay: 480ms;
  }
  [border='right'] figcaption:before,
  [border='right'] figcaption:after {
    transition-duration: 0s;
  }
  [border='right'].hover figcaption:before,
  [border='right']:hover figcaption:before,
  [border='right']:focus figcaption:before,
  :focus > [border='right'] figcaption:before {
    transition-delay: 480ms;
  }
  [border='right'].hover figcaption:after,
  [border='right']:hover figcaption:after,
  [border='right']:focus figcaption:after,
  :focus > [border='right'] figcaption:after {
    transition-delay: 0s;
  }

  /* border-left
    ----------------------------- */
  [border='left']:before,
  [border='left']:after {
    transform-origin: 0 0;
  }
  [border='left'] figcaption:before {
    transition-delay: 480ms;
  }
  [border='left'] figcaption:before,
  [border='left'] figcaption:after {
    transition-duration: 0s;
  }
  [border='left'].hover figcaption:after,
  [border='left']:hover figcaption:after,
  [border='left']:focus figcaption:after,
  :focus > [border='left'] figcaption:after {
    transition-delay: 480ms;
  }
  [border='left'].hover figcaption:before,
  [border='left']:hover figcaption:before,
  [border='left']:focus figcaption:before,
  :focus > [border='left'] figcaption:before {
    transition-delay: 0s;
  }

  /* border-corners-1
    ----------------------------- */
  [border='corners-1']:before,
  [border='corners-1'] figcaption:before {
    transform-origin: 0 0;
  }
  [border='corners-1']:after,
  [border='corners-1'] figcaption:after {
    transform-origin: 100% 100%;
  }

  /* border-corners-2
    ----------------------------- */
  [border='corners-2']:before,
  [border='corners-2'] figcaption:before {
    transform-origin: 100% 100%;
  }
  [border='corners-2']:after,
  [border='corners-2'] figcaption:after {
    transform-origin: 0 0;
  }

  /* border-top-left
    ----------------------------- */
  [border='top-left']:before,
  [border='top-left']:after,
  [border='top-left'] figcaption:before,
  [border='top-left'] figcaption:after {
    transform-origin: 0 0;
  }
  [border='top-left']:before {
    transition-delay: 480ms;
    transition-delay: calc(var(--transition-duration) / 1.25);
  }
  [border='top-left']:after {
    transition-delay: 0s;
  }
  [border='top-left'] figcaption:before {
    transition-delay: 480ms;
    transition-delay: calc(var(--transition-duration) / 1.25);
  }
  [border='top-left'] figcaption:after {
    transition-delay: 0s;
  }
  [border='top-left'].hover:before,
  [border='top-left']:hover:before,
  [border='top-left']:focus:before,
  :focus > [border='top-left']:before {
    transition-delay: 0s;
  }
  [border='top-left'].hover:after,
  [border='top-left']:hover:after,
  [border='top-left']:focus:after,
  :focus > [border='top-left']:after {
    transition-delay: 480ms;
    transition-delay: calc(var(--transition-duration) / 1.25);
  }
  [border='top-left'].hover figcaption:before,
  [border='top-left']:hover figcaption:before,
  [border='top-left']:focus figcaption:before,
  :focus > [border='top-left'] figcaption:before {
    transition-delay: 0s;
  }
  [border='top-left'].hover figcaption:after,
  [border='top-left']:hover figcaption:after,
  [border='top-left']:focus figcaption:after,
  :focus > [border='top-left'] figcaption:after {
    transition-delay: 480ms;
    transition-delay: calc(var(--transition-duration) / 1.25);
  }

  /* border-top-right
    ----------------------------- */
  [border='top-right']:before,
  [border='top-right']:after,
  [border='top-right'] figcaption:before,
  [border='top-right'] figcaption:after {
    transform-origin: 100% 0%;
  }
  [border='top-right']:before {
    transition-delay: 480ms;
    transition-delay: calc(var(--transition-duration) / 1.25);
  }
  [border='top-right']:after {
    transition-delay: 0s;
  }
  [border='top-right'] figcaption:before {
    transition-delay: 0s;
  }
  [border='top-right'] figcaption:after {
    transition-delay: 480ms;
    transition-delay: calc(var(--transition-duration) / 1.25);
  }
  [border='top-right'].hover:before,
  [border='top-right']:hover:before,
  [border='top-right']:focus:before,
  :focus > [border='top-right']:before {
    transition-delay: 0s;
  }
  [border='top-right'].hover:after,
  [border='top-right']:hover:after,
  [border='top-right']:focus:after,
  :focus > [border='top-right']:after {
    transition-delay: 480ms;
    transition-delay: calc(var(--transition-duration) / 1.25);
  }
  [border='top-right'].hover figcaption:before,
  [border='top-right']:hover figcaption:before,
  [border='top-right']:focus figcaption:before,
  :focus > [border='top-right'] figcaption:before {
    transition-delay: 480ms;
    transition-delay: calc(var(--transition-duration) / 1.25);
  }
  [border='top-right'].hover figcaption:after,
  [border='top-right']:hover figcaption:after,
  [border='top-right']:focus figcaption:after,
  :focus > [border='top-right'] figcaption:after {
    transition-delay: 0s;
  }

  /* border-bottom-left
    ----------------------------- */
  [border='bottom-left']:before,
  [border='bottom-left']:after,
  [border='bottom-left'] figcaption:before,
  [border='bottom-left'] figcaption:after {
    transform-origin: 0 100%;
  }
  [border='bottom-left']:before {
    transition-delay: 0s;
  }
  [border='bottom-left']:after {
    transition-delay: 480ms;
    transition-delay: calc(var(--transition-duration) / 1.25);
  }
  [border='bottom-left'] figcaption:before {
    transition-delay: 480ms;
    transition-delay: calc(var(--transition-duration) / 1.25);
  }
  [border='bottom-left'] figcaption:after {
    transition-delay: 0s;
  }
  [border='bottom-left'].hover:before,
  [border='bottom-left']:hover:before,
  [border='bottom-left']:focus:before,
  :focus > [border='bottom-left']:before {
    transition-delay: 480ms;
    transition-delay: calc(var(--transition-duration) / 1.25);
  }
  [border='bottom-left'].hover:after,
  [border='bottom-left']:hover:after,
  [border='bottom-left']:focus:after,
  :focus > [border='bottom-left']:after {
    transition-delay: 0s;
  }
  [border='bottom-left'].hover figcaption:before,
  [border='bottom-left']:hover figcaption:before,
  [border='bottom-left']:focus figcaption:before,
  :focus > [border='bottom-left'] figcaption:before {
    transition-delay: 0s;
  }
  [border='bottom-left'].hover figcaption:after,
  [border='bottom-left']:hover figcaption:after,
  [border='bottom-left']:focus figcaption:after,
  :focus > [border='bottom-left'] figcaption:after {
    transition-delay: 480ms;
    transition-delay: calc(var(--transition-duration) / 1.25);
  }

  /* border-bottom-right
    ----------------------------- */
  [border='bottom-right']:before,
  [border='bottom-right']:after,
  [border='bottom-right'] figcaption:before,
  [border='bottom-right'] figcaption:after {
    transform-origin: 100% 100%;
  }
  [border='bottom-right']:before {
    transition-delay: 0s;
  }
  [border='bottom-right']:after {
    transition-delay: 480ms;
    transition-delay: calc(var(--transition-duration) / 1.25);
  }
  [border='bottom-right'] figcaption:before {
    transition-delay: 0s;
  }
  [border='bottom-right'] figcaption:after {
    transition-delay: 480ms;
    transition-delay: calc(var(--transition-duration) / 1.25);
  }
  [border='bottom-right'].hover:before,
  [border='bottom-right']:hover:before,
  [border='bottom-right']:focus:before,
  :focus > [border='bottom-right']:before {
    transition-delay: 480ms;
    transition-delay: calc(var(--transition-duration) / 1.25);
  }
  [border='bottom-right'].hover:after,
  [border='bottom-right']:hover:after,
  [border='bottom-right']:focus:after,
  :focus > [border='bottom-right']:after {
    transition-delay: 0s;
  }
  [border='bottom-right'].hover figcaption:before,
  [border='bottom-right']:hover figcaption:before,
  [border='bottom-right']:focus figcaption:before,
  :focus > [border='bottom-right'] figcaption:before {
    transition-delay: 480ms;
    transition-delay: calc(var(--transition-duration) / 1.25);
  }
  [border='bottom-right'].hover figcaption:after,
  [border='bottom-right']:hover figcaption:after,
  [border='bottom-right']:focus figcaption:after,
  :focus > [border='bottom-right'] figcaption:after {
    transition-delay: 0s;
  }

  /* border-cc-1
    ----------------------------- */
  [border='cc-1']:before,
  [border='cc-1']:after,
  [border='cc-1'] figcaption:before,
  [border='cc-1'] figcaption:after {
    transition-duration: 300ms;
  }
  [border='cc-1']:before,
  [border='cc-1'] figcaption:after {
    transform-origin: 0 0;
  }
  [border='cc-1']:after,
  [border='cc-1'] figcaption:before {
    transform-origin: 100% 100%;
  }
  [border='cc-1']:before {
    transition-delay: 600ms;
  }
  [border='cc-1']:after {
    transition-delay: 0s;
  }
  [border='cc-1'] figcaption:before {
    transition-delay: 900ms;
  }
  [border='cc-1'] figcaption:after {
    transition-delay: 300ms;
  }
  [border='cc-1'].hover:before,
  [border='cc-1']:hover:before,
  [border='cc-1']:focus:before,
  :focus > [border='cc-1']:before {
    transition-delay: 300ms;
  }
  [border='cc-1'].hover:after,
  [border='cc-1']:hover:after,
  [border='cc-1']:focus:after,
  :focus > [border='cc-1']:after {
    transition-delay: 900ms;
  }
  [border='cc-1'].hover figcaption:before,
  [border='cc-1']:hover figcaption:before,
  [border='cc-1']:focus figcaption:before,
  :focus > [border='cc-1'] figcaption:before {
    transition-delay: 0s;
  }
  [border='cc-1'].hover figcaption:after,
  [border='cc-1']:hover figcaption:after,
  [border='cc-1']:focus figcaption:after,
  :focus > [border='cc-1'] figcaption:after {
    transition-delay: 600ms;
  }

  /* border-ccc-1
    ----------------------------- */
  [border='ccc-1']:before,
  [border='ccc-1']:after,
  [border='ccc-1'] figcaption:before,
  [border='ccc-1'] figcaption:after {
    transition-duration: 400ms;
  }
  [border='ccc-1']:before,
  [border='ccc-1'] figcaption:after {
    transform-origin: 100% 100%;
  }
  [border='ccc-1']:after,
  [border='ccc-1'] figcaption:before {
    transform-origin: 0 0;
  }
  [border='ccc-1']:before {
    transition-delay: 0s;
  }
  [border='ccc-1']:after {
    transition-delay: 600ms;
  }
  [border='ccc-1'] figcaption:before {
    transition-delay: 900ms;
  }
  [border='ccc-1'] figcaption:after {
    transition-delay: 300ms;
  }
  [border='ccc-1'].hover:before,
  [border='ccc-1']:hover:before,
  [border='ccc-1']:focus:before,
  :focus > [border='ccc-1']:before {
    transition-delay: 900ms;
  }
  [border='ccc-1'].hover:after,
  [border='ccc-1']:hover:after,
  [border='ccc-1']:focus:after,
  :focus > [border='ccc-1']:after {
    transition-delay: 300ms;
  }
  [border='ccc-1'].hover figcaption:before,
  [border='ccc-1']:hover figcaption:before,
  [border='ccc-1']:focus figcaption:before,
  :focus > [border='ccc-1'] figcaption:before {
    transition-delay: 0s;
  }
  [border='ccc-1'].hover figcaption:after,
  [border='ccc-1']:hover figcaption:after,
  [border='ccc-1']:focus figcaption:after,
  :focus > [border='ccc-1'] figcaption:after {
    transition-delay: 600ms;
  }

  /* border-cc-2
    ----------------------------- */
  [border='cc-2']:before,
  [border='cc-2'] figcaption:after {
    transform-origin: 0 0;
  }
  [border='cc-2']:after,
  [border='cc-2'] figcaption:before {
    transform-origin: 100% 100%;
  }

  /* border-ccc-2
    ----------------------------- */
  [border='ccc-2']:before,
  [border='ccc-2'] figcaption:after {
    transform-origin: 100% 100%;
  }
  [border='ccc-2']:after,
  [border='ccc-2'] figcaption:before {
    transform-origin: 0 0;
  }

  /* border-cc-3
    ----------------------------- */
  [border='cc-3']:before,
  [border='cc-3'] figcaption:after {
    transform-origin: 0 0;
  }
  [border='cc-3']:after,
  [border='cc-3'] figcaption:before {
    transform-origin: 100% 100%;
  }
  [border='cc-3']:before {
    right: 33px;
    right: calc(var(--border-margin) + var(--border-margin) + var(--border-width));
    left: 0;
  }
  [border='cc-3']:after {
    left: 33px;
    left: calc(var(--border-margin) + var(--border-margin) + var(--border-width));
    right: 0;
  }
  [border='cc-3'] figcaption:before {
    top: 33px;
    top: calc(var(--border-margin) + var(--border-margin) + var(--border-width));
    bottom: 0;
  }
  [border='cc-3'] figcaption:after {
    bottom: 33px;
    bottom: calc(var(--border-margin) + var(--border-margin) + var(--border-width));
    top: 0;
  }

  /* border-ccc-3
    ----------------------------- */
  [border='ccc-3']:before,
  [border='ccc-3'] figcaption:after {
    transform-origin: 100% 100%;
  }
  [border='ccc-3']:after,
  [border='ccc-3'] figcaption:before {
    transform-origin: 0 0;
  }
  [border='ccc-3']:before {
    left: 33px;
    left: calc(var(--border-margin) + var(--border-margin) + var(--border-width));
    right: 0;
  }
  [border='ccc-3']:after {
    right: 33px;
    right: calc(var(--border-margin) + var(--border-margin) + var(--border-width));
    left: 0;
  }
  [border='ccc-3'] figcaption:before {
    bottom: 33px;
    bottom: calc(var(--border-margin) + var(--border-margin) + var(--border-width));
    top: 0;
  }
  [border='ccc-3'] figcaption:after {
    top: 33px;
    top: calc(var(--border-margin) + var(--border-margin) + var(--border-width));
    bottom: 0;
  }

  /* border-fade
    ----------------------------- */
  [border='fade']:before,
  [border='fade']:after,
  [border='fade'] figcaption:before,
  [border='fade'] figcaption:after {
    transform: scale(1);
    opacity: 0;
  }
  [border='fade'].hover:before,
  [border='fade'].hover:after,
  [border='fade'].hover figcaption:before,
  [border='fade'].hover figcaption:after,
  [border='fade']:focus:before,
  [border='fade']:focus:after,
  [border='fade']:focus figcaption:before,
  [border='fade']:focus figcaption:after,
  :focus > [border='fade']:before,
  :focus > [border='fade']:after,
  :focus > [border='fade'] figcaption:before,
  :focus > [border='fade'] figcaption:after {
    opacity: 1;
  }

  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    [border]:before,
    [border]:after {
      height: 3px;
      left: 15px;
      right: 15px;
    }
    [border]:before {
      top: 15px;
    }
    [border]:after {
      bottom: 15px;
    }
    [border] figcaption:before,
    [border] figcaption:after {
      width: 3px;
      top: 15px;
      bottom: 15px;
    }
    [border] figcaption:before {
      left: 15px;
    }
    [border] figcaption:after {
      right: 15px;
    }
  }
  [fx='zoom-in']:hover img,
  [fx='zoom-in']:focus img,
  :focus > [fx='zoom-in'] img {
    transform: scale(1.25);
  }
  [fx='zoom-out'] img {
    transform: scale(1.25);
  }
  [fx='zoom-out']:hover img,
  [fx='zoom-out']:focus img,
  :focus > [fx='zoom-out'] img {
    transform: scale(1);
  }
  [fx='pan-up'] img {
    transform-origin: top;
    transform: scale(1.2) translate(0, 0);
  }
  [fx='pan-up']:hover img,
  [fx='pan-up']:focus img,
  :focus > [fx='pan-up'] img {
    transform: scale(1.2) translate(0, -15%);
  }
  [fx='pan-down'] img {
    transform-origin: bottom;
    transform: scale(1.2) translate(0, 0);
  }
  [fx='pan-down']:hover img,
  [fx='pan-down']:focus img,
  :focus > [fx='pan-down'] img {
    transform: scale(1.2) translate(0, 15%);
  }
  [fx='pan-left'] img {
    transform-origin: left;
    transform: scale(1.2) translate(0, 0);
  }
  [fx='pan-left']:hover img,
  [fx='pan-left']:focus img,
  :focus > [fx='pan-left'] img {
    transform: scale(1.2) translate(-15%, 0);
  }
  [fx='pan-right'] img {
    transform-origin: right;
    transform: scale(1.2) translate(0, 0);
  }
  [fx='pan-right']:hover img,
  [fx='pan-right']:focus img,
  :focus > [fx='pan-right'] img {
    transform: scale(1.2) translate(15%, 0);
  }
  [fx='blur']:hover img,
  [fx='blur']:focus img,
  :focus > [fx='blur'] img {
    filter: blur(4px);
    transform: scale(1.1);
  }
  [fx='rotate-left'] img {
    transform: scale(1.1) translate(0, 0);
  }
  [fx='rotate-left']:hover img,
  [fx='rotate-left']:focus img,
  :focus > [fx='rotate-left'] img {
    transform: scale(1.3) rotate(-15deg);
  }
  [fx='rotate-right'] img {
    transform: scale(1.1) translate(0, 0);
  }
  [fx='rotate-right']:hover img,
  [fx='rotate-right']:focus img,
  :focus > [fx='rotate-right'] img {
    transform: scale(1.3) rotate(15deg);
  }

  [delay='100'],
  [delay='100'] > * {
    transition-delay: 100ms;
  }

  [delay='200'],
  [delay='200'] > * {
    transition-delay: 200ms;
  }

  [delay='300'],
  [delay='300'] > * {
    transition-delay: 300ms;
  }

  [delay='400'],
  [delay='400'] > * {
    transition-delay: 400ms;
  }

  [delay='500'],
  [delay='500'] > * {
    transition-delay: 500ms;
  }

  [delay='600'],
  [delay='600'] > * {
    transition-delay: 600ms;
  }

  [delay='700'],
  [delay='700'] > * {
    transition-delay: 700ms;
  }

  [delay='800'],
  [delay='800'] > * {
    transition-delay: 800ms;
  }

  [delay='900'],
  [delay='900'] > * {
    transition-delay: 900ms;
  }

  [delay='1000'],
  [delay='1000'] > * {
    transition-delay: 1000ms;
  }

  [fade],
  [fade],
  [reveal],
  [reveal],
  [rotate],
  [rotate] {
    display: inline-block;
  }
  [fade] > *,
  [fade] > *,
  [reveal] > *,
  [reveal] > *,
  [rotate] > *,
  [rotate] > * {
    display: inline-block;
  }
  [fade] > *:last-child,
  [fade] > *:last-child,
  [reveal] > *:last-child,
  [reveal] > *:last-child,
  [rotate] > *:last-child,
  [rotate] > *:last-child {
    margin-bottom: 0;
  }

  [reveal],
  [rotate] {
    overflow: hidden;
    opacity: 1;
  }

  [fade] {
    opacity: 0;
  }

  figure:focus [fade],
  :focus > figure [fade] {
    opacity: 1;
    transform: translate(0);
  }
  figure.hover [reveal],
  figure.hover [rotate],
  :focus > figure [reveal],
  :focus > figure [rotate] {
    opacity: 1;
  }
  figure.hover [reveal] > *,
  figure.hover [rotate] > *,
  :focus > figure [reveal] > *,
  :focus > figure [rotate] > * {
    transform: translate(0) rotate(0deg);
  }

  [fade='up'] {
    transform: translateY(1.5rem);
  }
  [fade='down'] {
    transform: translateY(-1.5rem);
  }
  [fade='left'] {
    transform: translateX(1.5rem);
  }
  [fade='right'] {
    transform: translateX(-1.5rem);
  }
  [reveal='up'] > * {
    transform: translateY(100%);
  }
  [reveal='down'] > * {
    transform: translateY(-100%);
  }
  [reveal='left'] > * {
    transform: translateX(100%);
  }
  [reveal='right'] > * {
    transform: translateX(-100%);
  }
  [rotate='up-right'] > * {
    transform-origin: bottom left;
    transform: rotate(90deg);
  }
  [rotate='up-left'] > * {
    transform-origin: bottom right;
    transform: rotate(-90deg);
  }
  [rotate='down-right'] > * {
    transform-origin: top left;
    transform: rotate(-90deg);
  }
  [rotate='down-left'] > * {
    transform-origin: top right;
    transform: rotate(90deg);
  }

  [gradient='top'] {
    background-image: linear-gradient(180deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  }
  [gradient='left'] {
    background-image: linear-gradient(90deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  }
  [gradient='right'] {
    background-image: linear-gradient(270deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  }
  [gradient='bottom'] {
    background-image: linear-gradient(0deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  }
  [gradient='top-left'] {
    background-image: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  }
  [gradient='top-right'] {
    background-image: linear-gradient(225deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  }
  [gradient='bottom-left'] {
    background-image: linear-gradient(45deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  }
  [gradient='bottom-right'] {
    background-image: linear-gradient(315deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  }

  figure [lay='top-left'] {
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
  }
  figure [lay='top-center'] {
    justify-content: flex-start;
  }
  figure [lay='top-right'] {
    justify-content: flex-start;
    align-items: flex-end;
    text-align: right;
  }
  figure [lay='center-left'] {
    align-items: flex-start;
    text-align: left;
  }
  figure [lay='center-right'] {
    align-items: flex-end;
    text-align: right;
  }
  figure [lay='bottom-left'] {
    justify-content: flex-end;
    align-items: flex-start;
    text-align: left;
  }
  figure [lay='bottom-center'] {
    justify-content: flex-end;
  }
  figure [lay='bottom-right'] {
    justify-content: flex-end;
    align-items: flex-end;
    text-align: right;
  }

  figure {
    background-color: var(--primary-color);
  }
  figure figcaption {
    padding: 2em;
    padding: calc(var(--padding) * 2);
  }
  figure figcaption > * {
    opacity: 0;
  }
  figure.hover > img,
  figure:hover > img,
  figure:focus > img,
  :focus > figure > img {
    opacity: 0.25;
    opacity: var(--image-opacity);
  }
  figure.hover figcaption > *,
  figure:hover figcaption > *,
  figure:focus figcaption > *,
  :focus > figure figcaption > * {
    opacity: 1;
  }
</style>
