// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// // import App from './App';
// import App from './src/App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './src/App';
import store from './src/store';
import {name as appName} from './app.json';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
