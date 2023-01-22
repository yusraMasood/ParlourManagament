import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../../screens/Auth/LoginScreen';
import WelcomeScreen from '../../screens/Auth/WelcomeScreen';
import LoginOptions from '../../screens/Auth/LoginOptions';
import SignupScreen from '../../screens/Auth/SignupScreen';
import ForgotPassword from '../../screens/Auth/ForgotPassword';
import VerificationCode from '../../screens/Auth/VerificationCode';
import ResetPassword from '../../screens/Auth/ResetPassword';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <AuthStack.Screen name="LoginOptions" component={LoginOptions} />
      <AuthStack.Screen name="SignupScreen" component={SignupScreen} />

      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />

      <AuthStack.Screen name="VerificationCode" component={VerificationCode} />

      <AuthStack.Screen name="ResetPassword" component={ResetPassword} />


    </AuthStack.Navigator>
  );
};

export default AuthNavigator;