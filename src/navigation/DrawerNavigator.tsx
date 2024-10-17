// DrawerNavigator.js

import React from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import navigators and screens
import TabNavigator from './TabNavigator';
import SettingsScreen from '../screens/settings/SettingsScreen';

// Create the Drawer navigator
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeTabs"
      screenOptions={({route}: any) => ({
        headerShown: false, // Hide headers in drawer
        drawerIcon: ({focused, color, size}: any) => {
          let iconName = 'home'; // Default icon

          if (route.name === 'HomeTabs') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      {/* Drawer Screens */}
      <Drawer.Screen
        name="HomeTabs"
        component={TabNavigator}
        options={{drawerLabel: 'Home'}}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{drawerLabel: 'Settings'}}
      />
    </Drawer.Navigator>
  );
}
