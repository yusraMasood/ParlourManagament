import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import HomeScreen from '../../screens/Drawer/Home/HomeScreen';
import ProductDetails from '../../screens/Drawer/Home/ProductDetails';
import MyOrders from '../../screens/Drawer/Orders/MyOrders';
import SalonListScreen from '../../screens/Drawer/Home/SalonListScreen';
const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={NavigationOptions}>
      <HomeStack.Screen
        name="SalonListScreen"
        component={SalonListScreen}
        // options={{headerShown: false}}
      />
      {/* <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        // options={{headerShown: false}}
      /> */}
      <HomeStack.Screen
        name="ProductDetails"
        component={ProductDetails}
        // options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="MyOrders"
        component={MyOrders}
        // options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
