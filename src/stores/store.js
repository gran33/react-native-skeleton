import * as remx from 'remx';
import _ from 'lodash';

const state = remx.state({
  loading: false,
  launches: undefined
});

const setters = remx.setters({
  setLoading: (value) => {
    state.loading = value;
  },
  setLaunches: (value) => {
    state.launches = value;
  }
});

const getters = remx.getters({
  isLoading: () => {
    return state.loading;
  },
  getLaunches: () => {
    return state.launches;
  },
  shouldShowPriming: () => {
    return _.isUndefined(state.launches);
  },
  shouldShowEmptyView: () => {
    if (_.isArray(state.launches)) {
      return state.launches.length === 0;
    }
    return false;
  }
});

module.exports = {...getters, ...setters};
