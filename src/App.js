/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {Text, View} from 'react-native-ui-lib';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const details = 'Using:\n' +
  'react-native-navigation\n' +
  'react-native-ui-lib\n';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View flex center bg-dark20>
        <Text center white text40 marginB-10>Welcome to React Native Skeleton!</Text>
        <Text center white text70 marginB-10>To get started, edit App.js</Text>
        <Text center white text70 marginB-10>{instructions}</Text>
        <Text center white text60>{details}</Text>
      </View>
    );
  }
}
