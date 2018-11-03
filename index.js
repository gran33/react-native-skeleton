/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {Navigation} from "react-native-navigation";
require('./src/App');

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: "skeleton.welcome"
          }
        }]
      }
    }
  });
});
