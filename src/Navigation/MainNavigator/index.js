import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import HomeNavigator from '../HomeNavigator';
import TabNavigator from '../TabNavigator';
import DrawerNavigator from '../DrawerNavigator';

const Stack = createStackNavigator();

const MainNavigator = props => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
   
    </Stack.Navigator>
  );
};

export default MainNavigator;
