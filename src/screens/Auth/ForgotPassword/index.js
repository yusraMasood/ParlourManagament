import React, {useRef, useState} from 'react';
// import { styles } from 'react-native-material-ripple/styles';
import {View, Image} from 'react-native';
import {icons} from '../../../assets/images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import CustomButton from '../../../components/Buttons/CustomButton';
import InputField from '../../../components/Inputs/InputField';
import OutfitBold from '../../../components/Texts/OutfitBold';

import OutfitRegular from '../../../components/Texts/OutfitRegular';
import AuthWrapper from '../../../components/wrappers/AuthWrapper';
import styles from './styles';
import RippleHOC from '../../../components/wrappers/Ripple';

const ForgotPassword = props => {
  const [email, setEmail] = useState('');
  const submitForm = () => {
    props.navigation.navigate("VerificationCode")
  };

  return (
    <AuthWrapper
      style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <Image source={icons.logo} style={styles.logo} />
        <OutfitBold style={styles.titleText}>Forgot Password</OutfitBold>
        <OutfitRegular style={styles.enterEmailText}>
          Enter your email to recover your password.
        </OutfitRegular>
        <InputField
          onSubmitEditing={submitForm}
          inputContainerStyle={styles.input}
          label="Email Address"
          placeholder="Enter Email Address"
          onChangeText={setEmail}
          value={email}
          require
        />

        <CustomButton text="CONTINUE" onPress={submitForm} />
        <RippleHOC
          onPress={() => props.navigation.navigate('LoginScreen')}
          style={styles.signupAccount}>
          <OutfitRegular style={styles.signupText}>Back To Login</OutfitRegular>
        </RippleHOC>
        {/* </View> */}
      </KeyboardAwareScrollView>
    </AuthWrapper>
  );
};
export default ForgotPassword;
