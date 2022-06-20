import { createPopper, Instance, OptionsGeneric, Modifier } from '@popperjs/core';

export function createPopperActions(initOptions) {
  let popperInstance = null;
  let referenceNode;
  let contentNode;
  let options = initOptions;

  const initPopper = () => {
    if (referenceNode && contentNode) {
      popperInstance = createPopper(referenceNode, contentNode, options);
    }
  };

  const deinitPopper = () => {
    if (popperInstance) {
      popperInstance.destroy();
      popperInstance = null;
    }
  };

  const referenceAction = (node) => {
    referenceNode = node;
    initPopper();
    return {
      destroy() {
        deinitPopper();
      },
    };
  };

  const contentAction = (node, contentOptions) => {
    contentNode = node;
    options = { ...initOptions, ...contentOptions };
    initPopper();
    return {
      update(newContentOptions) {
        options = { ...initOptions, ...newContentOptions };
        if (popperInstance && options) {
          popperInstance.setOptions(options);
        }
      },
      destroy() {
        deinitPopper();
      },
    };
  };

  return [referenceAction, contentAction, () => popperInstance];
}
