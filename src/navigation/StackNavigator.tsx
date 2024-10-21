import React, {useContext, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// Import navigators and screens
import DrawerNavigator from './DrawerNavigator';
import LoginScreen from '../screens/login/LoginScreen';
import DetailScreen from '../screens/detail/DetailScreen';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import {AuthContext} from '../context/AuthContext';
import SplashScreen from '../screens/splash/SplashScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  const {isAuthenticated} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Show splash screen while loading
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }

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
