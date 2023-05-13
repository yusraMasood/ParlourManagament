import React, {useState, useRef} from 'react';
// import { styles } from 'react-native-material-ripple/styles';
import {View, FlatList, Image} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {icons} from '../../../assets/images';
import CustomButton from '../../../components/Buttons/CustomButton';
import InputField from '../../../components/Inputs/InputField';
import OutfitBold from '../../../components/Texts/OutfitBold';
import OutfitRegular from '../../../components/Texts/OutfitRegular';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import AuthWrapper from '../../../components/wrappers/AuthWrapper';
import styles from './styles';
import RippleHOC from '../../../components/wrappers/Ripple';
import useRegister from '../../../Hooks/useRegister';

const SignupScreen = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);

  const {registerUser} = useRegister();

  const submitForm = () => {
    var data = {
      firstName,
      lastName,
      email,
      phone,
      password,
      confirmPassword,
    };
    registerUser(data).then(res => {
      if (res?.status) {
        // console.log('res', res);
        props.navigation.navigate('LoginScreen');
      }
    });
  };

  const confirmPasswordRef = useRef(null);

  const [itemIndex, setItemIndex] = useState(0);
  const ChooseRound = props => {
    return (
      <View style={styles.radioContainer}>
        <View
          style={[styles.roundContainer, props.focus && styles.roundBorder]}>
          <View
            style={[styles.roundInner, props.focus && styles.roundInnerFocus]}
          />
        </View>
        <OutfitRegular style={[styles.roundNumberText]}>
          {props.item}
        </OutfitRegular>
      </View>
    );
  };
  return (
    <AuthWrapper style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <Image source={icons.logo} style={styles.logo} />
        <OutfitBold style={styles.titleText}>Sign Up</OutfitBold>

        <InputField
          reference={firstNameRef}
          onSubmitEditing={() => lastNameRef.current.focus()}
          label="First Name"
          onChangeText={setFirstName}
          value={firstName}
          placeholder="Enter First Name"
          require
        />
        <InputField
          reference={lastNameRef}
          onChangeText={setLastName}
          value={lastName}
          onSubmitEditing={() => emailRef.current.focus()}
          label="Last  Name"
          placeholder="Enter Last  Name"
          require
        />
        <InputField
          onSubmitEditing={() => phoneRef.current.focus()}
          reference={emailRef}
          onChangeText={setEmail}
          value={email}
          label="Email Address"
          placeholder="Enter Email Address"
          require
          keyboardType={'email-address'}
        />

        <InputField
          onSubmitEditing={() => passwordRef.current.focus()}
          reference={phoneRef}
          onChangeText={setPhone}
          value={phone}
          label="Phone Number"
          placeholder="Enter Phone Number"
          require
          keyboardType={'phone-pad'}
        />

        <InputField
          reference={passwordRef}
          onSubmitEditing={() => confirmPasswordRef.current.focus()}
          label="Password"
          placeholder="Enter Password"
          onChangeText={setPassword}
          value={password}
          rightIcon
          isPassword
          require
        />
        <InputField
          reference={confirmPasswordRef}
          onSubmitEditing={submitForm}
          inputContainerStyle={styles.input}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          label="Password"
          placeholder="Confirm Password"
          require
          rightIcon
          isPassword
        />
        <CustomButton text="Register" onPress={submitForm} />
        <RippleHOC
          onPress={() => props.navigation.navigate('LoginScreen')}
          style={styles.signupAccount}>
          <OutfitRegular style={styles.dontAccountText}>
            Already Have An Account?
          </OutfitRegular>
          <OutfitRegular style={styles.signupText}>Sign In</OutfitRegular>
        </RippleHOC>
      </KeyboardAwareScrollView>
    </AuthWrapper>
  );
};
export default SignupScreen;
