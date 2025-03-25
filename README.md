# ui-kit

ui-kit is a library that contains all ui components used in Smart City app

# Metro config setup

In order to use ui-kit properly, you need to restrict metro from using react, react native, gorhom22/portal, and react-native/navigation


```js
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

config.resolver.blockList = [
  ...Array.from(config.resolver.blockList ?? []),
  new RegExp(path.resolve('../ui-kit/node_modules', 'react')),
  new RegExp(path.resolve('../ui-kit/node_modules', 'react-native')),
  new RegExp(path.resolve('../ui-kit/node_modules', '@react-navigation')),
  new RegExp(path.resolve('../ui-kit/node_modules', 'react-navigation')),
  new RegExp(path.resolve('../ui-kit/node_modules', '@gorhom')),

];

config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, './node_modules'),
  path.resolve(__dirname, '../ui-kit/node_modules'),
];

config.resolver.extraNodeModules = {
  'ui-kit': '../ui-kit',
};

config.watchFolders = [path.resolve(__dirname, '../ui-kit')];

config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
});

module.exports = config;
```

# Create theme functionality 

ui-kit allows creating/overriding themes directly from your app

By default you have 2 themes 

```js

export const LightTheme = {
  colors: {
    ...sharedColors,
    background: "#E4EAF3",
    cards: "#FFFFFF",
    border: "#F7F9FB",
    icons: "#B6B7C1",
    text: "#161618",
    secondaryText: "#757588",
    main: "#5A6FDC",
    mainDarker: "#4E64D5",
    mainLighter: "#8394EC",
    mainLight: "#CFD7FF"
  },
  fonts,
  utils,
  borderRadius
};

export const DarkTheme = {
  colors: {
    ...sharedColors,
    background: "#1C1C20",
    cards: "#424A5D",
    border: "#757588",
    icons: "#555C70",
    text: "#FFFFFF",
    secondaryText: "#B2B2B5",
    main: "#8394EC",
    mainDarker: "#5A6FDC",
    mainLighter: "#8394EC",
    mainLight: "#CFD7FF"
  },
  fonts,
  utils,
  borderRadius
};
```

You need to register them in your app in order to use them

```js
import { darkTheme, lightTheme } from "ui-kit";


UnistylesRegistry.addThemes({
  light: lightTheme,
  dark: darkTheme
}).addConfig({
  adaptiveThemes: true
});
```

In order to use custom theme, import ```createTheme()``` function.  
With it you can override one of the default themes values (fonts, colors, and border radiuses)


```js
//NOTE 
// You need to give function one of the default themes to override it 

import {createTheme, lightTheme} from 'ui-kit'

const greenAndBlackTheme = createTheme(lightTheme, {
  colors: {
    background: "#1E1E1E",
    cards: "#2D2D2D",
    border: "#3A3A3A",
    icons: "#5A5A5A",
    text: "#FFFFFF",
    secondaryText: "#A0A0A0",
    main: "#18C674",
    mainDarker: "#149A55",
    mainLighter: "#B5EECB",
    mainLight: "#C5DD94"
  }
});

UnistylesRegistry.addThemes({
  light: greenAndBlackTheme,
  dark: darkTheme
}).addConfig({
  adaptiveThemes: true
});
```