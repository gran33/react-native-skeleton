import React, {Component} from 'react';
import {Platform} from 'react-native';
import {Text, View, Button} from 'react-native-ui-lib';
import * as actions from './../stores/actions';

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
export default class Welcome extends Component<Props> {

  onShowMorePress = () => {
    actions.pushShowMeMoreScreen(this.props.componentId);
  };

  render() {
    return (
      <View flex center bg-dark20>
        <Text center white text40 marginB-10>{'Welcome to React Native\n💀 Skeleton 💀'}</Text>
        <Text center white text70 marginB-10>To get started, edit App.js</Text>
        <Text center white text70 marginB-15>{instructions}</Text>
        <Text center white text60>{details}</Text>
        <Button
          onPress={this.onShowMorePress}
          label='Show Me More'
        />
      </View>
    );
  }
}
