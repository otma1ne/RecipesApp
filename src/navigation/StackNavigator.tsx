import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Import navigators and screens
import DrawerNavigator from './DrawerNavigator';
/* import {AuthContext} from '../context/AuthContext'; */ // Adjust the path as necessary
import LoginScreen from '../screens/login/LoginScreen';
import DetailScreen from '../screens/detail/DetailScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  const isAuthenticated: boolean = true;

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        // If authenticated, show the main app
        <>
          <Stack.Screen
            name="MainApp"
            component={DrawerNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{title: 'Product Details'}}
          />
        </>
      ) : (
        // If not authenticated, show the login screen
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
}
