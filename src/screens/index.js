
const { Navigation } = require('react-native-navigation');
import WelcomeDemo from "./WelcomeDemo";
import ListScreen from "./ListScreen";

function registerScreens() {
  Navigation.registerComponent('skeleton.demo.welcome', () => WelcomeDemo);
  Navigation.registerComponent('skeleton.demo.list', () => ListScreen);
}

module.exports = {
  registerScreens
};
