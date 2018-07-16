# pebble

> A set of lightweight and accessible React component written in typescript and emotion.

## Installation

```
yarn add @anarock/pebble
```

## Getting started

First of all you will need to install the fonts and icons used by the Design System.
Make sure the below code is executed at the very beginning. If you are using next.js, then
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
  return `
      @font-face{
          font-family: "${name}";
          src: url(${require("@anarock/pebble/dist/fonts/" +
            src +
            ".woff")}) format("woff"),
               url(${require("@anarock/pebble/dist/fonts/" +
                 src +
                 ".woff2")}) format("woff2"),
               url(${require("@anarock/pebble/dist/fonts/" +
                 src +
                 ".ttf")}) format("truetype"),
               url(${require("@anarock/pebble/dist/fonts/" +
                 src +
                 ".svg")}#${name}) format("svg");
          font-style: ${fontStyle};
          font-weight: ${fontWeight};
      }
  `;
}

injectGlobal`
  ${loadFont("Anarock", "anarock-regular", "normal")}
  ${loadFont("Anarock", "anarock-medium", "bold")}
  ${loadFont("anarock-icons", "anarock-icons")}
`;

// initStyles includes the CSS for all the icons and some normalizing CSS properties.
initStyles();
```

## License

MIT
