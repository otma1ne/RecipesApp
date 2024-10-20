import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Import navigators and screens
import DrawerNavigator from './DrawerNavigator';
import LoginScreen from '../screens/login/LoginScreen';
import DetailScreen from '../screens/detail/DetailScreen';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import {AuthContext} from '../context/AuthContext';

const Stack = createStackNavigator();

export default function StackNavigator() {
  const {isAuthenticated} = useContext(AuthContext);

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
        // If not authenticated, show the onboarding screen or login screen
        <>
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
