# pebble-web

> A set of lightweight and accessible React component written in typescript and emotion.

## Installation

```
yarn add pebble-web
```

## Getting started

First of all you will need to install the fonts and icons used by the Design System.
Make sure the below code is executed at the very beginning.

The easier way is to use the cdn:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@anarock/pebble-web@[version]/dist/pebble.css"
/>
```

:boom: Warning: Pebble adds `box-sizing: border-box` by default to every element by using [`inherit`](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/).
If you have some elements whose children which need default box-sizing you can reset it's box-sizing to `content-box`

### Polyfill

Pebble intends to have a very small footprint while maintaining performance.
This, however, comes at a cost of supporting only modern browsers. If you need to support legacy browsers, you would need to add polyfills.

```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=Array.prototype.find,Array.prototype.findIndex,IntersectionObserver,Intl.~locale.en,Object.entries,default"></script>
```

### UMD Usage

```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=Array.prototype.find,Array.prototype.findIndex,IntersectionObserver,Intl.~locale.en,Object.entries,default"></script>
<script src="https://unpkg.com/react@latest/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@latest/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@anarock/pebble-web@latest/dist/pebble-web.umd.js"></script>
<script>
  // Components are available in window.pebble
  var Button = pebble.Button;
  var h = React.createElement;
  ReactDOM.render(
    h(
      Button,
      {
        onClick: function() {
          alert("You clicked the button");
        }
      },
      "Click Me!"
    ),
    document.getElementById("root")
  );
</script>
```

## Tree Shaking

Pebble is fully tree shakeable with this [rollup config](/tests/build/treeShaking.test.js) present in tests.
//TODO Create config and tests for webpack as well.

## Acknowledgements

We use [Chromaticqa](https://www.chromaticqa.com/) for visual regression testing and it is awesome.

## License

MIT
