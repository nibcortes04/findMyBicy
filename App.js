import 'react-native-gesture-handler';
import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={screenOptions}
        />
        <Stack.Screen name="Login" component={Login} options={screenOptions} />
        <Stack.Screen
          name="Register"
          component={Register}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
