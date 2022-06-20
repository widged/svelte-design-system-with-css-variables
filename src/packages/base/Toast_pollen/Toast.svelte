<!--
### Global toast notification provider
 -->
<script context="module" lang="ts">
  import successIcon from 'lucide-static/icons/check-circle-2.svg';
  import infoIcon from 'lucide-static/icons/info.svg';
  import errorIcon from 'lucide-static/icons/slash.svg';
  import { Notyf } from 'notyf';
  import 'notyf/notyf.min.css';

  let notyf: Notyf;

  function addToast(
    title: string,
    message: string,
    type: 'error' | 'success' | 'info' = 'info'
  ) {
    if (!notyf) {
      notyf = new Notyf({
        duration: 3000,
        ripple: false,
        dismissible: true,
        position: {
          x: 'right',
          y: 'bottom'
        },
        types: [
          {
            type: 'error',
            icon: errorIcon,
            background: 'var(--color-black)'
          },
          {
            type: 'success',
            icon: successIcon,
            background: 'var(--color-black)'
          },
          {
            type: 'info',
            icon: infoIcon,
            background: 'var(--color-black)'
          }
        ]
      });
    }

    notyf.open({
      type,
      message: `<span class="notyf__title">${title}</span><p>${message}</p>`
    });
  }

  type ToastConfig = { title: string; message: string };
  export const toast = {
    info(config: ToastConfig) {
      addToast(config.title, config.message, 'info');
    },
    success(config: ToastConfig) {
      addToast(config.title, config.message, 'success');
    },
    error(config: ToastConfig) {
      addToast(config.title, config.message, 'error');
    }
  };
</script>

<style global lang="postcss">
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
    padding: var(--grid-page-gutter);
  }

  .notyf__toast {
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
    background: var(--icon-background, var(--color-grey-600));
    border: var(--size-1) solid var(--icon-border, var(--color-grey-700));
    border-radius: var(--radius-100);
    animation: none;
    opacity: 1;
    & svg {
      height: var(--size-4);
      width: var(--size-4);
    }
  }

  .notyf__message {
    font: var(--text-sm);
    color: var(--color-grey-400);
    animation: none;
    opacity: 1;
    & p {
      margin: 0;
    }
  }

  .notyf__title {
    color: white;
    font-weight: var(--weight-medium);
  }

  .notyf__dismiss {
    position: relative;
    height: var(--size-3);
    width: var(--size-3);
    margin-left: var(--size-6);
  }

  .notyf__toast--error {
    --icon-background: var(--color-error);
    --icon-border: var(--color-error-700);
  }

  .notyf__toast--success {
    --icon-background: var(--color-success);
    --icon-border: var(--color-success-700);
  }
</style>
