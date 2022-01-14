import { isAndroid } from 'lib/device';
import Config from 'react-native-config';

export const API_URL = isAndroid() ? Config.ANDROID_API_URL : Config.IOS_API_URL;
