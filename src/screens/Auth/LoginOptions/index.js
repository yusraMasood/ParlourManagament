import React from 'react';
import {Text, View, Image} from 'react-native';
import {icons} from '../../../assets/images';
import SocialButton from '../../../components/Buttons/SocialButton';
import OutfitBold from '../../../components/Texts/OutfitBold';
import OutfitRegular from '../../../components/Texts/OutfitRegular';
// import { icons } from '../../../assets/images';
import AuthWrapper from '../../../components/wrappers/AuthWrapper';
import RippleHOC from '../../../components/wrappers/Ripple';
import styles from './styles';

const LoginOptions = props => {
  return (
    <AuthWrapper
      text="Login"
      bottomLine="Don't Have An Account?"
      actionText="Sign Up"
      style={styles.container}>
      <Image source={icons.logo} style={styles.logo} />
      <OutfitBold style={styles.titleText}>Login</OutfitBold>
      <SocialButton text="Sign In With Apple ID" icon={icons.apple} />
      <SocialButton text="Sign In With Facebook" icon={icons.facebook} />
      <SocialButton
        text="Sign In  With Email"
        icon={icons.mail}
        onPress={() => props.navigation.navigate('LoginScreen')}
      />
      <SocialButton text="Sign In With Google ID" icon={icons.google} />
      <RippleHOC
        onPress={() => props.navigation.navigate('SignupScreen')}
        style={styles.signupAccount}>
        <OutfitRegular style={styles.dontAccountText}>
          Don't Have An Account?
        </OutfitRegular>
        <OutfitRegular style={styles.signupText}>Sign Up</OutfitRegular>
      </RippleHOC>
    </AuthWrapper>
  );
};
export default LoginOptions;