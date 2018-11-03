/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {registerScreens} from './screens';
import {Navigation} from 'react-native-navigation/lib/dist/index';

registerScreens();

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
