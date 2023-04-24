import * as React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {Bills, CreditScore} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import MainTab from './Tabs';

const Stack = createStackNavigator();

export const navigationRef = createNavigationContainerRef();

const MainNav = ({}) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="Bills" component={Bills} />
        <Stack.Screen name="CreditScore" component={CreditScore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNav;
