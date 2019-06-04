# pebble-shared

A set of utilities and icons shared between pebble-native and pebble-web.

## Install

```
yarn add pebble-shared
```

## Using icons in React Native

Add the following in your `package.json`;

```json
"rnpm": {
    "assets": {
        "./node_modules/pebble-shared/native/icons"
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

## Using in Expo

````
In your entry file `App.js`

```js
 export default class App extends Component {
   state = {
     fontsLoaded: false
   };

   async componentDidMount() {
     await Font.loadAsync({
       pebble: require("./node_modules/pebble-shared/native/icons/pebble.ttf")
     });

     this.setState({
       fontsLoaded: true
     });
   }

   render() {
     return this.state.fontsLoaded && <Main />;
   }
 }
````

## Acknowledgements

We use [Chromaticqa](https://www.chromaticqa.com/) for visual regression testing and it is awesome.

## License

MIT
