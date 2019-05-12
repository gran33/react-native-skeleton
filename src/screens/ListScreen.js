import React, {Component} from 'react';
import {Alert, FlatList, StyleSheet} from 'react-native';
import {Button, Colors, Image, ListItem, LoaderScreen, Text, View} from 'react-native-ui-lib';
import * as actions from './../stores/actions';
import * as store from '../stores/store';
import {connect} from 'remx';
import STRINGS from '../../DemoStrings/strings';
import TestIDs from '../TestIDs';


class ListScreen extends Component<Props> {

  static options() {
    return {
      topBar: {
        title: {
          text: STRINGS.LIST_SCREEN_TITLE
        },
      }
    };
  }

  onButtonPress = () => {
    actions.getLaunches();
  };

  keyExtractor = item => item.name;

  renderPrimingView() {
    return (
      <View flex center testID={TestIDs.LAUNCHES_PRIMING_SCREEN}>
        <Text text20>{STRINGS.PRIMING_TITLE}</Text>
        <Text text40>{STRINGS.PRIMING_SUBTITLE}</Text>
        <Button
          testID={TestIDs.LAUNCHES_CTA}
          marginT-60
          label={STRINGS.PRIMING_CTA}
          onPress={this.onButtonPress}
        />

      </View>
    );
  }

  renderItem = ({item}) => {
    return (
      <ListItem
        activeBackgroundColor={Colors.dark60}
        activeOpacity={0.3}
        height={77.5}
        onPress={() => Alert.alert(`Pressed on ${item.name}`)}
        key={item.id}
      >
        <ListItem.Part left>
          <Image
            source={{uri: item.imageURL}}
            style={{width: 60, height: 60}}
          />
        </ListItem.Part>
        <ListItem.Part middle column containerStyle={{paddingRight: 17, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: Colors.dark70}}>
          <ListItem.Part>
            <Text dark10 text70 style={{flex: 1, marginRight: 10, marginLeft: 16}} numberOfLines={1}>{item.name}</Text>
          </ListItem.Part>
        </ListItem.Part>
      </ListItem>
    );
  }

  renderList() {
    return (
      <View flex testID={TestIDs.LAUNCHES_SCREEN}>
        <FlatList
          data={this.props.launches}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );

  }


  render() {
    if (this.props.isLoading) {
      return (
        <View flex testID={TestIDs.LAUNCHES_LOADING_SCREEN}>
          <LoaderScreen/>
        </View>
      );
    }

    if (this.props.showPriming) {
       return this.renderPrimingView();
    }

    return (
      <View flex testID={TestIDs.LAUNCHES_LIST_SCREEN}>
        {this.renderList()}
      </View>
    );
  }
}


function mapStateToProps() {
  return {
    isLoading: store.isLoading(),
    launches: store.getLaunches(),
    showPriming: store.shouldShowPriming(),
  };
}

export default connect(mapStateToProps)(ListScreen);
