import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AuthNavigator from '../AuthNavigator';
import MainNavigator from '../MainNavigator';
import {useToken} from '../../state/auth';
const ParentStack = createStackNavigator();

const ParentNavigator = () => {
  // console.log("USER", user);
  const token = useToken();
  return (
    <ParentStack.Navigator screenOptions={{headerShown: false}}>
      {token ? (
        <ParentStack.Screen name="MainNavigator" component={MainNavigator} />
      ) : (
        <ParentStack.Screen name="AuthNavigator" component={AuthNavigator} />
      )}
    </ParentStack.Navigator>
  );
};

export default ParentNavigator;
