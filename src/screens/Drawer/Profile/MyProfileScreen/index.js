import React, {useLayoutEffect, useRef, useEffect} from 'react';
import {View, Image} from 'react-native';
import OutfitRegular from '../../../../components/Texts/OutfitRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import {generalImages, icons} from '../../../../assets/images';
import OutfitSemiBold from '../../../../components/Texts/OutfitSemiBold';
import RippleHOC from '../../../../components/wrappers/Ripple';
import CustomButton from '../../../../components/Buttons/CustomButton';
import ChangePasswordPopup from '../../../../components/popups/ChangePasswordPopup';
import Header from '../../../../components/Header';
import useProfile from '../../../../Hooks/useProfile';
// import {useDispatch, useSelector} from 'react-redux';
// import {GetProfile} from '../../../../StateManagement/UserSlice';
// import moment from 'moment';

const MyProfileScreen = props => {
  const popupRef = useRef(null);

  const {profile} = useProfile();

  const profileData = [
    {
      name: 'First Name',
      value: profile?.name,
    },
    // {
    //   name: 'Phone No',
    //   value: userProfile?.,
    // },
    {
      name: 'Email',
      value: profile?.email,
    },
    {
      name: 'Phone',
      value: profile?.phone,
    },
    // {
    //   name: 'DOB',
    //   value: "29/18/23",
    // },
  ];

  return (
    <ScreenWrapper
      style={styles.profileContainer}
      linear={styles.linearInScreen}>
      <View style={styles.imgContainer}>
        <Image
          source={generalImages.defaultUserImage}
          style={styles.userImage}
        />
      </View>
      {/* <RippleHOC
        style={styles.changePasswordContainer}
        onPress={() => popupRef.current.show()}>
        <OutfitSemiBold style={styles.passwordText}>
          Change Password
        </OutfitSemiBold>
      </RippleHOC> */}
      <View style={styles.profileMainContainer}>
        <View>
          {profileData.map((item, index) => {
            return (
              <View style={styles.rowContainer}>
                <OutfitSemiBold style={styles.headingText}>
                  {item.name}
                </OutfitSemiBold>
                <OutfitRegular style={styles.nameText}>
                  {item.value}
                </OutfitRegular>
              </View>
            );
          })}
        </View>
        {/* <View style={styles.rowContainer}>
          <OutfitSemiBold style={styles.headingText}>Last Name</OutfitSemiBold>
          <OutfitRegular style={styles.nameText}>
           Corrigan
          </OutfitRegular>
        </View> */}
      </View>
      {/* <CustomButton
        onPress={() => props.navigation.navigate('EditProfileScreen')}
        text="EDIT PROFILE"
        style={styles.btnContainer}
      /> */}

      <ChangePasswordPopup reference={popupRef} icon={icons.tick} />
    </ScreenWrapper>
  );
};
export default MyProfileScreen;
