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
<link rel="stylesheet" href="https://unpkg.com/@anarock/pebble@[version]/dist/pebble.css"/>
```

If you are using next.js and want the CSS to be bundled with the app, then
`_document.js` or `_app.js` is best location to execute this.

```typescript
import { injectGlobal } from "react-emotion";
import { initStyles } from "@anarock/pebble";

function loadFont(
  name: string,
  src: string,
  fontWeight: string = "normal",
  fontStyle: string = "normal"
) {
  const ttf = require(`@anarock/pebble/dist/fonts/${src}.ttf`);
  const woff2 = require(`@anarock/pebble/dist/fonts/${src}.woff2`);
  const woff = require(`@anarock/pebble/dist/fonts/${src}.woff`);
  const svg = require(`@anarock/pebble/dist/fonts/${src}.svg`);

  return `
      @font-face{
          font-family: "${name}";
          src: url(${woff}) format("woff"),
               url(${woff2}) format("woff2"),
               url(${ttf}) format("truetype"),
               url(${svg}#${name}) format("svg");
          font-style: ${fontStyle};
          font-weight: ${fontWeight};
      }
  `;
}

injectGlobal`
  ${loadFont("Anarock", "anarock-regular", "normal")}
  ${loadFont("Anarock", "anarock-medium", "bold")}
  ${loadFont("AnarockIcons", "AnarockIcons")}
`;

// initStyles includes the CSS for all the icons and some normalizing CSS properties.
initStyles();
```

## Using fonts/icons in React Native

Add the following in your `package.json`;

```json
"rnpm": {
    "assets": {
        "./node_modules/@anarock/pebble/native/fonts"
    }
}
```

and then it can be used by importing the Icon component.

```js
import { Icon } from "@anarock/pebble/native"

// Usage
<Icon name="icon-name" size={20} color="#000000" />
```

Then run `react-native link`

## License

MIT
