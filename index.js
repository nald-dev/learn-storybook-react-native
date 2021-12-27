import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import StorybookApp from './storybook';

const isPreviewingStorybook = false;
const AppToRegister = isPreviewingStorybook ? StorybookApp : App;

AppRegistry.registerComponent(appName, () => AppToRegister);
