/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Firebase'i import et
import '@react-native-firebase/app';
import '@react-native-firebase/database';

AppRegistry.registerComponent(appName, () => App);
