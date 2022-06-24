<!-- derived from https://github.com/kazzkiq/balloon.css, MIT -->
<script context="module">
  export const POS = {
    up: 'up',
    down: 'down',
    left: 'left',
    right: 'right',
    upLeft: 'up-left',
    downRight: 'down-right',
    upRight: 'up-right',
  };

  export const SIZE = {
    small: 'small',
    medium: 'medium',
    large: 'large',
    fit: 'fit',
  };
</script>

<script>
  export let tip = null;
  export let pos = 'up';
  export let visible = null;
  export let blunt = null; /* Disabling animation */
  export let size = SIZE.small;
  export let clear = null;
  export let nofocus = null;
  export let style = null;
</script>

<span aria-label={tip} {pos} {visible} {blunt} length={size} {nofocus} {clear} {style}
  ><slot /></span
>

<style>
  :root {
    --radius: 2px;
    --color-bg: rgba(16, 16, 16, 0.95);
    --color-prose: #fff;
    --font-size: 12px;
    --move: 4px;
    --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }
  button[aria-label][pos] {
    overflow: visible;
  }
  [aria-label][pos] {
    position: relative;
    cursor: pointer;
  }
  [aria-label][pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: var(----font-family);
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: var(--font-size);
    background: var(--color-bg);
    border-radius: 2px;
    color: var(--color-prose);
    border-radius: var(--radius);
    content: attr(aria-label);
    padding: 0.5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10;
  }
  [aria-label][pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: var(--color-bg);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: '';
    position: absolute;
    z-index: 10;
  }
  [aria-label][pos]:hover:before,
  [aria-label][pos]:hover:after,
  [aria-label][pos][visible]:before,
  [aria-label][pos][visible]:after,
  [aria-label][pos]:not([nofocus]):focus:before,
  [aria-label][pos]:not([nofocus]):focus:after {
    opacity: 1;
    pointer-events: none;
  }
  [aria-label][pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  [aria-label][pos][clear]:after {
    white-space: pre;
  }
  [aria-label][pos][clear][length]:after {
    white-space: pre-line;
    word-break: break-word;
  }
  [aria-label][pos][blunt]:before,
  [aria-label][pos][blunt]:after {
    transition: none;
  }
  [aria-label][pos][pos='up']:hover:after,
  [aria-label][pos][pos='up'][visible]:after,
  [aria-label][pos][pos='down']:hover:after,
  [aria-label][pos][pos='down'][visible]:after {
    transform: translate(-50%, 0);
  }
  [aria-label][pos][pos='up']:hover:before,
  [aria-label][pos][pos='up'][visible]:before,
  [aria-label][pos][pos='down']:hover:before,
  [aria-label][pos][pos='down'][visible]:before {
    transform: translate(-50%, 0);
  }
  [aria-label][pos][pos*='-left']:after {
    left: 0;
  }
  [aria-label][pos][pos*='-left']:before {
    left: 5px;
  }
  [aria-label][pos][pos*='-right']:after {
    right: 0;
  }
  [aria-label][pos][pos*='-right']:before {
    right: 5px;
  }
  [aria-label][pos][pos*='-left']:hover:after,
  [aria-label][pos][pos*='-left'][visible]:after,
  [aria-label][pos][pos*='-right']:hover:after,
  [aria-label][pos][pos*='-right'][visible]:after {
    transform: translate(0, 0);
  }
  [aria-label][pos][pos*='-left']:hover:before,
  [aria-label][pos][pos*='-left'][visible]:before,
  [aria-label][pos][pos*='-right']:hover:before,
  [aria-label][pos][pos*='-right'][visible]:before {
    transform: translate(0, 0);
  }
  [aria-label][pos][pos^='up']:before,
  [aria-label][pos][pos^='up']:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, var(--move));
  }
  [aria-label][pos][pos^='up']:after {
    margin-bottom: 10px;
  }
  [aria-label][pos][pos='up']:before,
  [aria-label][pos][pos='up']:after {
    left: 50%;
    transform: translate(-50%, var(--move));
  }
  [aria-label][pos][pos^='down']:before,
  [aria-label][pos][pos^='down']:after {
    top: 100%;
    transform: translate(0, calc(var(--move) * -1));
  }
  [aria-label][pos][pos^='down']:after {
    margin-top: 10px;
  }
  [aria-label][pos][pos^='down']:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: var(--color-bg);
  }
  [aria-label][pos][pos='down']:after,
  [aria-label][pos][pos='down']:before {
    left: 50%;
    transform: translate(-50%, calc(var(--move) * -1));
  }
  [aria-label][pos][pos='left']:hover:after,
  [aria-label][pos][pos='left'][visible]:after,
  [aria-label][pos][pos='right']:hover:after,
  [aria-label][pos][pos='right'][visible]:after {
    transform: translate(0, -50%);
  }
  [aria-label][pos][pos='left']:hover:before,
  [aria-label][pos][pos='left'][visible]:before,
  [aria-label][pos][pos='right']:hover:before,
  [aria-label][pos][pos='right'][visible]:before {
    transform: translate(0, -50%);
  }
  [aria-label][pos][pos='left']:after,
  [aria-label][pos][pos='left']:before {
    right: 100%;
    top: 50%;
    transform: translate(var(--move), -50%);
  }
  [aria-label][pos][pos='left']:after {
    margin-right: 10px;
  }
  [aria-label][pos][pos='left']:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: var(--color-bg);
  }
  [aria-label][pos][pos='right']:after,
  [aria-label][pos][pos='right']:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(var(--move) * -1), -50%);
  }
  [aria-label][pos][pos='right']:after {
    margin-left: 10px;
  }
  [aria-label][pos][pos='right']:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: var(--color-bg);
  }
  [aria-label][pos][length]:after {
    white-space: normal;
  }
  [aria-label][pos][length='small']:after {
    width: 80px;
  }
  [aria-label][pos][length='medium']:after {
    width: 150px;
  }
  [aria-label][pos][length='large']:after {
    width: 260px;
  }
  [aria-label][pos][length='xlarge']:after {
    width: 380px;
  }
  @media screen and (max-width: 768px) {
    [aria-label][pos][length='xlarge']:after {
      width: 90vw;
    }
  }
  [aria-label][pos][length='fit']:after {
    width: 100%;
  }
</style>
