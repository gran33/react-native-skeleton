import {Navigation} from 'react-native-navigation';

export function pushShowMeMoreScreen(componentId) {
  Navigation.push(componentId, {
    component: {
      name: 'skeleton.welcome',
    }
  });
}