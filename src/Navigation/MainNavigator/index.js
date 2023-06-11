import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import HomeNavigator from '../HomeNavigator';
import TabNavigator from '../TabNavigator';
import DrawerNavigator from '../DrawerNavigator';
import BookingScreen from '../../screens/Drawer/BookingScreen';
import HomeScreen from '../../screens/Drawer/Home/HomeScreen';
import MapScreen from '../../screens/Drawer/Home/MapScreen';
import useProfile from '../../Hooks/useProfile';

const Stack = createStackNavigator();

const MainNavigator = props => {
  const {getProfile} = useProfile();
  
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        // options={{headerShown: false}}
      />
      <Stack.Screen name="BookingScreen" component={BookingScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
