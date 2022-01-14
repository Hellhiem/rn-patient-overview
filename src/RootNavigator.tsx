import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, homeScreenOptions, PatientDetailsScreen, patientDetailsScreenOptions } from 'screens';
import { StorybookScreen } from 'screens/StorybookScreen';
import { RootStackParams, Route } from 'types';

const Stack = createStackNavigator<RootStackParams>();

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Route.HomeScreen}>
        <Stack.Group>
          <Stack.Screen options={homeScreenOptions} name={Route.HomeScreen} component={HomeScreen} />
          <Stack.Screen name={Route.Storybook} component={StorybookScreen} />
          <Stack.Screen
            name={Route.PatientDetailsScreen}
            component={PatientDetailsScreen}
            options={patientDetailsScreenOptions}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
