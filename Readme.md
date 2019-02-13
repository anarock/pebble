# pebble

> A set of lightweight and accessible React component written in typescript and emotion.

## Installation

```
yarn add @anarock/pebble
```

## Getting started

First of all you will need to install the fonts and icons used by the Design System.
Make sure the below code is executed at the very beginning.

The easier way is to use the cdn:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@anarock/pebble@[version]/dist/pebble.css"
/>
```

:boom: Warning: Pebble adds `box-sizing: border-box` by default to every element by using [`inherit`](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/).
If you have some elements whose children which need default box-sizing you can reset it's box-sizing to `content-box`

### Polyfill

Pebble intends to have a very small footprint while maintaining performance.
This, however, comes at a cost of supporting only modern browsers. If you need to support legacy browsers, you would need to add polyfills.

```html
<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.find,Array.prototype.findIndex,IntersectionObserver,Intl.~locale.en"></script>
```

## Using icons in React Native

Add the following in your `package.json`;

```json
"rnpm": {
    "assets": {
        "./node_modules/@anarock/pebble/native/icons"
    }
}
```

Then run `react-native link`.
and then it can be used by importing the Icon component.

```jsx
import { Icon } from "@anarock/pebble/native";

// Usage
<Icon name="iconName" size={20} color="#000000" />;
```

## Acknowledgements

We use [Chromaticqa](https://www.chromaticqa.com/) for visual regression testing and it is awesome.

## License

MIT
