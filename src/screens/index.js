const { Navigation } = require('react-native-navigation');
import Welcome from './Welcome';

function registerScreens() {
  Navigation.registerComponent('skeleton.welcome', () => Welcome);
}

module.exports = {
  registerScreens
};