import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import PrivacyPolicy from '../../screens/Drawer/PrivacyPolicy';

const HomeStack = createStackNavigator();

const PrivacyPolicyNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={NavigationOptions}>
      <HomeStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    </HomeStack.Navigator>
  );
};

export default PrivacyPolicyNavigator;