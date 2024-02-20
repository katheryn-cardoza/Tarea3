import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import OTPScreen from './OTPScreen';
import ProfileScreen from './ProfileScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="OTPVerification" component={OTPScreen} />
    <Stack.Screen name="Home" component={HomeStack} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Opciones" component={AuthStack} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default App;
