import {Navigation} from 'react-native-navigation';
import Root from "./screens/root.screen";

function startApplication(): void {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.WelcomeScreen'
            }
          }
        ]
      }
    }
  });
}

Navigation.registerComponent('com.myApp.WelcomeScreen', () => Root);
Navigation.events().registerAppLaunchedListener(startApplication);
