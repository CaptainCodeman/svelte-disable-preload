# svelte-disable-preload

![minified](https://img.shields.io/bundlephobia/min/svelte-disable-preload/0.0.1?style=for-the-badge)
![minified + zipped](https://img.shields.io/bundlephobia/minzip/svelte-disable-preload/0.0.1?style=for-the-badge)

SveltKit provides a client-side router that handles navigation when anchor elements are clicked. It can also be [configured to preload data](https://kit.svelte.dev/docs/link-options) to make your app seem "snappier". It does this by listening for various `click`, `mousedown`, `mousemove`, and `touchstart` events on the document which will bubble from elements.

For typical "web-app" use, this is no problem. But if you're working with HTML `canvas` elements and `requestAnimationFrame` animations, you may not want these extra event handlers being invoked - it can introduce a slight 'juddering' effect and spoil an otherwise smooth animation.

There is [an option to disable it](https://kit.svelte.dev/docs/link-options#disabling-options) but this only disables the _behavior_ from being invoked, i.e. the preloading itself - the event listeners are still there.

This package provides a simple action to apply noop event listeners to an element that prevent the document-level SvelteKit event handlers being invoked.

## Usage

Install using your package manager of choice, e.g.

    pnpm i svelte-no-preload

Import it into your component and `use:` it on an element:

```svelte
<script lang="ts">
  import { disablePreload } from 'svelte-disable-preload'
</script>

<canvas use:disablePreload />
```

Your canvas interactions should now be slightly smoother.
