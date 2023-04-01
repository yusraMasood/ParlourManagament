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
// import {useDispatch, useSelector} from 'react-redux';
// import {GetProfile} from '../../../../StateManagement/UserSlice';
// import moment from 'moment';

const MyProfileScreen = props => {
  const popupRef = useRef(null);

  // const userProfile = useSelector(state => state?.user?.user?.user?.userData);
  // const userProfile = useSelector(state => state?.user?.user?.user?.userData);

  // console.log('userProfile', userProfile);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(GetProfile());
  // }, []);

  const profile = [
    {
      name: 'First Name',
      value: "Atlas",
    },
    // {
    //   name: 'Phone No',
    //   value: userProfile?.,
    // },
    {
      name: 'Email',
      value: "atlas@gmail.com",
    },
    {
      name: 'Gender',
      value: "male",
    },
    {
      name: 'DOB',
      value: "29/18/23",
    },
  ];
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerBackground: () => {
        return (
          <View style={{backgroundColor: 'green'}}>
            <Header />
            <View style={styles.imgContainer}>
              <Image
                source={ generalImages.defaultUserImage
                }
                style={styles.userImage}
              />
            </View>
          </View>
        );
      },
    });
  }, [props.navigation]);

  return (
    <ScreenWrapper
      style={styles.profileContainer}
      linear={styles.linearInScreen}>
      <RippleHOC
        style={styles.changePasswordContainer}
        onPress={() => popupRef.current.show()}>
        <OutfitSemiBold style={styles.passwordText}>
          Change Password
        </OutfitSemiBold>
      </RippleHOC>
      <View style={styles.profileMainContainer}>
        <View>
          {profile.map((item, index) => {
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
        <View style={styles.rowContainer}>
          <OutfitSemiBold style={styles.headingText}>Last Name</OutfitSemiBold>
          <OutfitRegular style={styles.nameText}>
           Corrigan
          </OutfitRegular>
        </View>
      </View>
      <CustomButton
        onPress={() => props.navigation.navigate('EditProfileScreen')}
        text="EDIT PROFILE"
        style={styles.btnContainer}
      />

      <ChangePasswordPopup reference={popupRef} icon={icons.tick} />
    </ScreenWrapper>
  );
};
export default MyProfileScreen;
