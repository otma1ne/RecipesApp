import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './navigation/StackNavigator';
import {AuthProvider} from './context/AuthContext';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <AuthProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}

export default App;
