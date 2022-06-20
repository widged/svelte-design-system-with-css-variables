/**
 * Inject content into a portal
 */
export function portal(node, target) {
  function update(_target) {
    node.hidden = true;
    _target.appendChild(node);
    node.hidden = false;
  }

  function destroy() {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }

  update(target || document.body);
  return {
    update,
    destroy,
  };
}
