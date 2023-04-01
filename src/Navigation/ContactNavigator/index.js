import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import ContactUs from '../../screens/Drawer/ContactUs';

const HomeStack = createStackNavigator();

const ContactNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={NavigationOptions}>
      <HomeStack.Screen name="ContactUs" component={ContactUs} />
    </HomeStack.Navigator>
  );
};

export default ContactNavigator;