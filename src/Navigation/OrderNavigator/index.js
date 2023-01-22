import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import MyOrders from '../../screens/Drawer/Orders/MyOrders';
import OrderDetails from '../../screens/Drawer/Orders/OrderDetails';

const Stack = createStackNavigator();

const OrderNavigator = props => {
  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen
        name="MyOrders"
        component={MyOrders}
      />
       <Stack.Screen
        name="OrderDetails"
        component={OrderDetails}
      />
   
    </Stack.Navigator>
  );
};

export default OrderNavigator;
