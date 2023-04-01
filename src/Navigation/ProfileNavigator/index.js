import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import MyProfileScreen from '../../screens/Drawer/Profile/MyProfileScreen';
import EditProfileScreen from '../../screens/Drawer/Profile/EditProfileScreen';

const HomeStack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={NavigationOptions}>
      <HomeStack.Screen name="MyProfileScreen" component={MyProfileScreen} />
      <HomeStack.Screen name="EditProfileScreen" component={EditProfileScreen} />

    </HomeStack.Navigator>
  );
};

export default ProfileNavigator;