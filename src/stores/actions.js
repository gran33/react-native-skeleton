import _ from 'lodash';
import {Navigation} from 'react-native-navigation';
import * as LaunchesService from '../services/launches';
import * as store from './store';

export function pushShowMeMoreScreen(componentId) {
  Navigation.push(componentId, {
    component: {
      name: 'skeleton.demo.list'
    }
  });
}

export async function getLaunches({isEmpty} = {}) {
  let launches;

  store.setLoading(true);

  if (isEmpty) {
    launches = await LaunchesService.getLaunches({limit: 0});
  } else {
    launches = await LaunchesService.getLaunches();
  }
  const launchesWithImages = _.filter(launches, 'imageURL');

  store.setLaunches(launchesWithImages);
  store.setLoading(false);
}
