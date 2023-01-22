import {useNavigation} from '@react-navigation/native';
import React, {useRef, useImperativeHandle, useState} from 'react';
import {Image, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {showToast} from '../../../Api/HelperFunction';
import {ChangePassword} from '../../../StateManagement/UserSlice';
import {colors, linearColors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';
import CustomButton from '../../Buttons/CustomButton';
import InputField from '../../Inputs/InputField';
import OutfitMedium from '../../Texts/OutfitMedium';
import OutfitRegular from '../../Texts/OutfitRegular';
import ContentContainer from '../../wrappers/ContentContainer';
import PopupWrapper from '../PopupWrapper';
import styles from './styles';

const ChangePasswordPopup = props => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigation = useNavigation();
  const popup = useRef(null);
  const passwordRef = useRef(null);
  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();

  const submit = () => {
    if (newPassword == '') {
      return showToast('Please Enter New Password');
    }
    if (oldPassword == '') {
      return showToast('Please Enter your Old Password');
    }
    if (confirmPassword == '') {
      return showToast('Please Enter Confirm Password');
    }
    if (newPassword.length < 8) {
      return showToast('password should be greater than 8 digit');
    }
    if (newPassword.length > 17) {
      return showToast("Password's should not be more than 16 digit");
    }
    if (newPassword == oldPassword) {
      return showToast(`You can't use your old Password`);
    }
    if (newPassword !== confirmPassword) {
      return showToast('Password does not match');
    }
    // if (oldPassword == newPassword) {
    //   return showToast('Please dont use Old Password')
    // }
    const body = {
      current_password: oldPassword,
      password: newPassword,
      password_confirmation: confirmPassword,
    };
    dispatch(ChangePassword(body)).then(({type}) => {
      if (type == 'user/changepassword/fulfilled') {
        hide();
        navigation.goBack();
      }
    });
  };
  useImperativeHandle(props?.reference, () => ({
    hide: hide,
    show: show,
  }));

  const show = () => {
    popup?.current?.show();
  };

  const hide = () => {
    popup?.current?.hide();
  };

  // const onYes = () => {
  //   if (props?.onAccept) {
  //     props?.onAccept();
  //   }
  //   hide();
  // };
  // const submitForm=()=>{
  //  navigation.navigate('MyProfileScreen');
  // }

  return (
    <PopupWrapper reference={popup}>
      <View style={styles.container}>
        <ContentContainer aware contentContainerStyle={styles.awareStyle}>
          <OutfitMedium style={styles.changeText}>Change Password</OutfitMedium>

          <InputField
            reference={passwordRef}
            label="Password"
            placeholder="Enter Password"
            require
            rightIcon
            isPassword
            value={oldPassword}
            onChangeText={setOldPassword}
            inputContainerIcon={styles.input}
            onSubmitEditing={() => newPasswordRef.current.focus()}
            // keyboardType="email-address"
          />
          <InputField
            reference={newPasswordRef}
            label="New Password"
            require
            // rightIcon

            // isPassword
            rightIcon
            isPassword
            placeholder="Enter New Password"
            inputContainerIcon={styles.input}
            value={newPassword}
            onChangeText={setNewPassword}
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            // keyboardType="email-address"
          />
          <InputField
            reference={confirmPasswordRef}
            label="Confirm  Password"
            require
            rightIcon
            isPassword
            placeholder="Confirm Password"
            inputContainerIcon={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            onSubmitEditing={submit}
            // keyboardType="email-address"
          />
          <CustomButton
            text="UPDATE"
            // linearColors={linearColors.blackBtn}
            onPress={submit}
            style={styles.okBtn}
            // style={{marginHorizontal: vw * 2}}
          />
        </ContentContainer>
      </View>
    </PopupWrapper>
  );
};
export default ChangePasswordPopup;
