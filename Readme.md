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
<link href="https://fonts.googleapis.com/css?family=Roboto:400,500" rel="stylesheet">
<link rel="stylesheet" href="https://unpkg.com/@anarock/pebble@[version]/dist/pebble.css"/>
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

```js
import { Icon } from "@anarock/pebble/native"

// Usage
<Icon name="icon-name" size={20} color="#000000" />
```

## License

MIT
