import React, {Component} from 'react';
import {Text, View, Button} from 'react-native-ui-lib';
import * as actions from './../stores/actions';
import STRINGS from '../../DemoStrings/strings';
import TestIDs from '../TestIDs';


type Props = {};
export default class WelcomeDemo extends Component<Props> {

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
      <View flex center bg-dark20 testID={TestIDs.WELCOME_SCREEN}>
        {this.renderText(STRINGS.WELCOME_SCREEN_TITLE)}
        <Text center white text60 marginB-20>{STRINGS.WELCOME_SCREEN_SUBTITLE}</Text>
        <Button
          testID={TestIDs.WELCOME_CTA}
          onPress={this.onShowMorePress}
          label='Show Me More'
        />
      </View>
    );
  }
}
