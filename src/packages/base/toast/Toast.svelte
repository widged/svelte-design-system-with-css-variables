<!--
### Global toast notification provider
 -->
<script context="module">
  import successIcon from './etc/check-circle-2.svg';
  import infoIcon from './etc/info.svg';
  import errorIcon from './etc/slash.svg';
  import { Notyf } from 'notyf';
  import 'notyf/notyf.min.css';

  /*  export let type ={
    error: 'error',
    success: 'success',
  info: 'info'
  }
  */

  let notyf;

  function addToast(title, message, type = 'info') {
    if (!notyf) {
      notyf = new Notyf({
        duration: 3000,
        ripple: false,
        dismissible: true,
        position: {
          x: 'right',
          y: 'bottom',
        },
        types: [
          {
            type: 'error',
            icon: errorIcon,
            background: 'var(--color-black)',
          },
          {
            type: 'success',
            icon: successIcon,
            background: 'var(--color-black)',
          },
          {
            type: 'info',
            icon: infoIcon,
            background: 'var(--color-black)',
          },
        ],
      });
    }

    notyf.open({
      type,
      message: `<span class="notyf__title">${title}</span><p>${message}</p>`,
    });
  }

  export const toast = {
    info(config) {
      addToast(config.title, config.message, 'info');
    },
    success(config) {
      addToast(config.title, config.message, 'success');
    },
    error(config) {
      addToast(config.title, config.message, 'error');
    },
  };
</script>

<style>
  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateY(100%);
      opacity: 0;
    }
  }

  .notyf {
    color: var(--text-color);
    padding: var(--grid-page-gutter);
  }

  .notyf__toast {
    color: var(--text-color);
    border-radius: var(--radius-sm);
    padding: 0;
    box-shadow: var(--elevation-xs);
    opacity: 1;
    transform: translateY(100%);
    animation: slideUp 300ms var(--easing-decelerate) forwards;
    max-width: var(--width-xs);
  }

  .notyf__toast--disappear {
    animation: slideOut 300ms var(--easing-accelerate) forwards;
  }

  .notyf__wrapper {
    padding: var(--size-4);
    align-items: flex-start;
  }

  .notyf__icon {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    margin-right: var(--size-4);
    width: var(--size-8);
    height: var(--size-8);
    background: var(--icon-background, var(--grey-600));
    border: var(--size-1) solid var(--icon-border, var(--grey-700));
    border-radius: var(--radius-100);
    animation: none;
    opacity: 1;
  }
  .notyf__icon svg {
    height: var(--size-4);
    width: var(--size-4);
  }
  .notyf__message {
    font: var(--text-sm);
    color: var(--grey-400);
    animation: none;
    opacity: 1;
  }
  .notyf__message p {
    color: var(--text-color);
    margin: 0;
  }
  .notyf__title {
    color: var(--text-color);
    font-weight: var(--weight-medium);
  }

  .notyf__dismiss {
    position: relative;
    height: var(--size-3);
    width: var(--size-3);
    margin-left: var(--size-6);
  }

  :global(.notyf__toast--error) {
    color: var(--intent-error);
    --icon-background: var(--intent-error);
    --icon-border: var(--intent-error-700);
  }

  :global(.notyf__toast--success) {
    color: var(--intent-success);
    --icon-background: var(--intent-success);
    --icon-border: var(--intent-success-700);
  }
</style>
