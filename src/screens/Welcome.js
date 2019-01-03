import React, {Component} from 'react';
import {Platform} from 'react-native';
import {Text, View, Button} from 'react-native-ui-lib';
import {Navigation} from 'react-native-navigation';
import * as actions from './../stores/actions';

const details = 'react-native-navigation\n' +
  'react-native-ui-lib\n' +
  'remx\n';

type Props = {};
export default class Welcome extends Component<Props> {

  static options() {
    return {
      topBar: {
        visible: false
      }
    }
  }

  constructor(props) {
    super(props);
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        visible: false
      }
    });
  }

  onShowMorePress = () => {
    actions.pushShowMeMoreScreen(this.props.componentId);
  };

  renderText(text) {
    return (
      <Text center white text40 marginB-40>{`${text}`}</Text>
    );

  }

  render() {
    return (
      <View flex center bg-dark20>
        {this.renderText('Welcome to React Native\n💀 Skeleton 💀')}
        {this.renderText('To get started, edit App.js')}
        <Text center white text60>{details}</Text>
        <Button
          onPress={this.onShowMorePress}
          label='Show Me More'
        />
      </View>
    );
  }
}
