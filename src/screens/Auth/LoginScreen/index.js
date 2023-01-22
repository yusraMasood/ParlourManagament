import React, {useEffect, useRef, useState} from 'react';
// import { styles } from 'react-native-material-ripple/styles';
import {View, Image, Platform} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {icons} from '../../../assets/images';
import CustomButton from '../../../components/Buttons/CustomButton';
import InputField from '../../../components/Inputs/InputField';
import OutfitBold from '../../../components/Texts/OutfitBold';
import OutfitRegular from '../../../components/Texts/OutfitRegular';
import AuthWrapper from '../../../components/wrappers/AuthWrapper';
import RippleHOC from '../../../components/wrappers/Ripple';
import styles from './styles';

const LoginScreen = props => {
  const passwordRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submit = () => {
    props.navigation.navigate("MainNavigator")
  };

  return (
    <AuthWrapper style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <Image source={icons.logo} style={styles.logo} />
        <OutfitBold style={styles.titleText}>Login</OutfitBold>
        <InputField
          label="Email Address"
          placeholder="Enter Email Address"
          onChangeText={setEmail}
          require
          onSubmitEditing={() => passwordRef.current.focus()}
          keyboardType="email-address"
        />
        <InputField
          reference={passwordRef}
          onSubmitEditing={submit}
          inputContainerStyle={styles.input}
          onChangeText={setPassword}
          label="Password"
          placeholder="Enter Password"
          require
          rightIcon
          isPassword
        />
        <RippleHOC
          style={styles.forgotContainer}
          onPress={() => props.navigation.navigate('ForgotPassword')}>
          <OutfitRegular style={styles.forgotPassword}>
            Forgot Password?
          </OutfitRegular>
        </RippleHOC>
        <CustomButton text="LOGIN" onPress={submit} />

        <View style={styles.signupAccount}>
          <OutfitRegular style={styles.dontAccountText}>
            Don't Have An Account?
          </OutfitRegular>
          <RippleHOC onPress={() => props.navigation.navigate('SignupScreen')}>
            <OutfitRegular style={styles.signupText}>Sign Up</OutfitRegular>
          </RippleHOC>
        </View>
      </KeyboardAwareScrollView>
    </AuthWrapper>
  );
};
export default LoginScreen;
