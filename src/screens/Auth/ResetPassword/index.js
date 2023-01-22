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
import RippleHOC from '../../../components/wrappers/Ripple';
import styles from './styles';

const ResetPassword = props => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const submitForm = () => {
    props.navigation.navigate('LoginScreen');
  };

  const confirmPasswordRef = useRef(null);

  // const submitForm = () => {
  //   props.navigation.navigate('LoginOptions');
  // };
  return (
    <AuthWrapper style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <Image source={icons.logo} style={styles.logo} />
        <OutfitBold style={styles.titleText}>Forgot Password</OutfitBold>
        <OutfitRegular style={styles.enterEmailText}>
          Set new password for your account.
        </OutfitRegular>

        <InputField
          onSubmitEditing={() => confirmPasswordRef.current.focus()}
          rightIcon
          isPassword
          label="New Password"
          value={newPassword}
          onChangeText={setNewPassword}
          placeholder="Enter New Password"
          require
        />
        <InputField
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          reference={confirmPasswordRef}
          onSubmitEditing={submitForm}
          rightIcon
          isPassword
          inputContainerStyle={styles.input}
          label="Confirm Password"
          placeholder="Enter Password"
          require
        />

        <CustomButton text="UPDATE" onPress={submitForm} />
        {/* <View style={styles.alignButton}> */}
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
export default ResetPassword;
