import React, {useState} from 'react';
// import { styles } from 'react-native-material-ripple/styles';
import {View, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import {showToast} from '../../../Api/HelperFunction';
import {icons} from '../../../assets/images';
import CustomButton from '../../../components/Buttons/CustomButton';
import InputField from '../../../components/Inputs/InputField';
import OutfitBold from '../../../components/Texts/OutfitBold';
import OutfitRegular from '../../../components/Texts/OutfitRegular';
import AuthWrapper from '../../../components/wrappers/AuthWrapper';
import RippleHOC from '../../../components/wrappers/Ripple';
import styles from './styles';

const VerificationCode = props => {
  const [code, setCode] = useState('');
  const submitForm = () => {
props.navigation.navigate("ResetPassword")
  };
  return (
    <AuthWrapper style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <Image source={icons.logo} style={styles.logo} />
        <OutfitBold style={styles.titleText}>Forgot Password</OutfitBold>
        <OutfitRegular style={styles.enterEmailText}>
          Enter verification code sent to your email
        </OutfitRegular>
        <InputField
          onSubmitEditing={submitForm}
          inputContainerStyle={styles.input}
          label="Verification Code"
          value={code}
          onChangeText={setCode}
          placeholder="Enter Verification Code"
          require
        />
        <View style={styles.resendContainer}>
          <RippleHOC>
            <OutfitRegular style={styles.signupText}>Resend</OutfitRegular>
          </RippleHOC>
        </View>

        <CustomButton
          text="CONTINUE"
          onPress={submitForm}
          // onPress={() => props.navigation.navigate('ResetPassword')}
        />
        {/* <View  style={styles.alignButton}> */}

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
export default VerificationCode;
