import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import HomeNavigator from '../HomeNavigator';
import TabNavigator from '../TabNavigator';
import DrawerNavigator from '../DrawerNavigator';
import BookingScreen from '../../screens/Drawer/BookingScreen';
import HomeScreen from '../../screens/Drawer/Home/HomeScreen';

const Stack = createStackNavigator();

const MainNavigator = props => {
  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        // options={{headerShown: false}}
      />
      <Stack.Screen name="BookingScreen" component={BookingScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
