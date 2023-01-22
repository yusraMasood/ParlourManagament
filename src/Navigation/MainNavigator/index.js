import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import HomeNavigator from '../HomeNavigator';
import TabNavigator from '../TabNavigator';

const Stack = createStackNavigator();

const MainNavigator = props => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
   
    </Stack.Navigator>
  );
};

export default MainNavigator;
