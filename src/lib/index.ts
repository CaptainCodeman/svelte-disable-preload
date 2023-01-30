export function disablePreload(node: HTMLElement) {
  const events = ['click', 'touchstart', 'mousedown', 'mousemove']
  const opts = { capture: true }

  function noop(e: Event) {
    e.preventDefault()
    e.stopPropagation()
  }

  events.forEach(event => node.addEventListener(event, noop, opts))

  return {
    destroy() {
      events.forEach(event => node.removeEventListener(event, noop, opts))
    }
  }
}