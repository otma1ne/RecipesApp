import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './navigation/StackNavigator';
import {AuthProvider} from './context/AuthContext';
import {Provider} from 'react-redux';
import store from './redux/store';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <AuthProvider>
          <NavigationContainer >
            <StackNavigator />
          </NavigationContainer>
        </AuthProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
