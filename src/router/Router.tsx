import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardNavigator from './OnboardNavigator';
import MainNavigator from './MainNavigator';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {Webview} from '@pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  const {isOnboarding} = useSelector(
    (state: RootState) => state.onboardingSlice,
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isOnboarding && (
          <Stack.Screen
            name={'OnboardNavigator'}
            component={OnboardNavigator}
          />
        )}

        <Stack.Screen name={'MainNavigator'} component={MainNavigator} />
        <Stack.Screen name={'WebView'} component={Webview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
