import 'config/translations/i18n';
import React from 'react';
import { StatusBar } from 'react-native';

import { isDarkMode } from 'lib/device';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import { lightTheme, darkTheme } from './config/styles';
import { RootNavigator } from './RootNavigator';

const App = () => {
  const theme = isDarkMode() ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
        <RootNavigator />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
