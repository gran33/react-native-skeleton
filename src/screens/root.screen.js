import React, {Component} from 'react';
import {
  FlatList,
} from 'react-native';

import {
  View,
  Text
} from 'react-native-ui-lib';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

class Root extends Component {
  renderItem = ({item}) => {
    return (
      <View bg-blue30 paddingV-30 marginV-1>
        <Text text30>{item.title}</Text>
      </View>
    )
  }

  render() {
    return (
      <View flex>
        <FlatList
          data={DATA}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />


      </View>
    );
  }
};

export default Root;
