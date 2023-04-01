import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import TermsAndConditions from '../../screens/Drawer/TermsAndConditions';

const HomeStack = createStackNavigator();

const TermsConditionsNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={NavigationOptions}>
      <HomeStack.Screen name="TermsAndConditions" component={TermsAndConditions} />
    </HomeStack.Navigator>
  );
};

export default TermsConditionsNavigator;