import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '@pages';
import {
  DiagnoseIcon,
  GardenIcon,
  HomeIcon,
  ProfileIcon,
  ScanIcon,
} from '@icons';

const Tab = createBottomTabNavigator();

const OnboardNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#28AF6E',
        tabBarInactiveTintColor: '#BDBDBD',
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <HomeIcon color={color} />,
        }}
      />
      <Tab.Screen
        name={'Diagnose'}
        component={Home}
        options={{
          tabBarLabel: 'Diagnose',
          tabBarIcon: ({color}) => <DiagnoseIcon color={color} />,
        }}
      />
      <Tab.Screen
        name={'Scan'}
        component={Home}
        options={{
          tabBarLabelStyle: {display: 'none'},
          tabBarIcon: () => <ScanIcon color={'#FFF'} />,
          tabBarIconStyle: {
            width: 64,
            height: 64,
            backgroundColor: '#28AF6E',
            borderRadius: 32,
            position: 'absolute',
            top: -32,
            borderColor: '#2CCC80',
            borderWidth: 4,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.01,
            shadowRadius: 1,
            elevation: 1,
          },
        }}
      />
      <Tab.Screen
        name={'MyGarden'}
        component={Home}
        options={{
          tabBarLabel: 'My Garden',
          tabBarIcon: ({color}) => <GardenIcon color={color} />,
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={Home}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => <ProfileIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default OnboardNavigator;
