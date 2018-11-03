/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {AppRegistry} from 'react-native';
import {registerScreens} from './screens';
import Welcome from "./screens/Welcome";


AppRegistry.registerComponent('skeleton.welcome', () => Welcome);
registerScreens();

