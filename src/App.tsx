import 'config/translations/i18n';
import React from 'react';
import { StatusBar } from 'react-native';

import { isDarkMode } from 'lib/device';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from 'store';
import { ThemeProvider } from 'styled-components/native';

import { lightTheme, darkTheme } from './config/styles';
import { RootNavigator } from './RootNavigator';

const App = () => {
  const theme = isDarkMode() ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <SafeAreaProvider>
          <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
          <RootNavigator />
        </SafeAreaProvider>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
