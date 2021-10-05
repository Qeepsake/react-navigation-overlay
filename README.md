# React Navigation Overlay

This library attempts to add support for "Overlays" to React Navigation similar to the `showOverlay` API in React Native Navigation.

## Install

```sh
npm i @qeepsake/react-navigation-overlay
```

## Usage

Add the `ReactNavigationOverlay` component to the top of your tree inside your `NavigationContainer`. This will allow the Overlays to be displayed.

```js
import { ReactNavigationOverlay } from "react-navigation-overlay";

<NavigationContainer>
  ...
  <ReactNavigationOverlay />
</NavigationContainer>;
```

Display an overlay by using the `Overlay.show()` method, and passing your component and any props.

```js
Overlay.show(MyFirstOverlay, { title: "..." })

...

const MyFirstOverlay = ({ title }) => {
    return ...;
}
```

## Authors

- [**Luke Brandon Farrell**](https://lukebrandonfarrell.com/) - _Author_

## License

This project is licensed under the MIT License
