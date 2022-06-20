export const clickOutside = (node) => {
  function onClick(e) {
    if (!node.contains(e.target)) {
      node.dispatchEvent(new CustomEvent('clickoutside', { detail: { outsideTarget: e.target } }));
    }
  }
  window.addEventListener('click', onClick);
  return () => window.removeEventListener('click', onClick);
};
