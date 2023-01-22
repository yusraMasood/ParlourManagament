import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AuthNavigator from '../AuthNavigator';
import MainNavigator from '../MainNavigator';
const ParentStack = createStackNavigator();

const ParentNavigator = () => {
  // console.log("USER", user);
  return (
    <ParentStack.Navigator screenOptions={{headerShown: false}}>
        <ParentStack.Screen name="AuthNavigator" component={AuthNavigator} />
        <ParentStack.Screen name="MainNavigator" component={MainNavigator} />
    </ParentStack.Navigator>
  );
};

export default ParentNavigator;
