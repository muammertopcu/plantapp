import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GetStarted, Onboarding} from '@pages';

const Stack = createNativeStackNavigator();

const OnboardNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'GetStarted'} component={GetStarted} />
      <Stack.Screen name={'Onboarding'} component={Onboarding} />
    </Stack.Navigator>
  );
};

export default OnboardNavigator;
