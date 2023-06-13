import React, {useRef, useEffect} from 'react';
import styles from './styles';
import DrawerButton from '../DrawerButton';
import {Image, View, Text} from 'react-native';
import {useDrawerProgress} from '@react-navigation/drawer';
import {vh, vw} from '../../../utils/dimensions';
import {drawerRoutes} from '../../../Navigation/NavigationOptions';
import Animated from 'react-native-reanimated';
import OutfitRegular from '../../Texts/OutfitRegular';
import CustomButton from '../../Buttons/CustomButton';
import GeneralPopup from '../../popups/GeneralPopup';
import {generalImages} from '../../../assets/images';
import {removeToken} from '../../../state/auth';
import {useDispatch} from 'react-redux';
import useProfile from '../../../Hooks/useProfile';
// import {
//   logout,
//   LogoutUser,
//   selectUser,
// } from '../../../StateManagement/UserSlice';

const routeOrders = [
  'HomeStack',
  'ProfileStack',
  'TermsStack',
  'PrivacyStack',
  'ContactStack',
];

const DrawerContent = props => {
  // const userDetails = useSelector(state => state?.user?.user?.user?.userData);
  // const token = useSelector(state => state?.user?.token);
  // console.error(userDetails?.image_url);

  // console.log("user",user);
  const dispatch = useDispatch();

  const {profile} = useProfile();

  const initialOpacity = new Animated.Value(1);
  const initialMove = new Animated.Value(0);
  const endOpacity = 0;
  const endMove = 100;
  const duration = 3000;
  const ref = useRef();
  const popupRef = useRef(null);
  // useEffect(() => {
  //   // on mount
  //   ref.current.capture().then(uri => {
  //     console.log("do something with ", uri);
  //   });
  // }, []);
  const logoutUser = () => {
    dispatch(removeToken(null));
    // dispatch(logout)
    // dispatch(logout());
    // dispatch(LogoutUser());
  };
  const progress = useDrawerProgress();
  const opacity = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [-10, 1],
  });

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [40 * -vh, vh * 1],
  });

  const animatedStylesImage = {
    opacity: opacity,
  };

  const animatedStyles = {
    opacity: opacity,
    transform: [{translateX}, {scale}],
  };

  const handleOnDrawerItemPress = routeName => {
    if (drawerRoutes[routeName]) {
      if (drawerRoutes[routeName].notRoute != true) {
        return props.navigation.navigate(routeName);
      }
      if (routeOrders[routeOrders.length - 1] == 'Logout') {
        return popupRef?.current?.show();
      }
    }
  };
  // const progress = useDrawerProgress();
  // const opacity = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [-5, 1],
  // });
  return (
    // <Animated.View style={[styles.container]}>
    <View style={styles.drawerContainer}>
      <Animated.View style={[styles.header, animatedStylesImage]}>
        <View style={styles.profileImageContainer}>
          <Image
            source={generalImages.defaultUserImage}
            style={styles.profileImage}
          />
        </View>

        <View style={styles.headerRight}>
          <OutfitRegular style={styles.username}>{profile?.name}</OutfitRegular>
        </View>
      </Animated.View>
      <View style={styles.routeContainer}>
        {routeOrders.map((item, index) => {
          return (
            <Animated.View style={[animatedStyles]}>
              <DrawerButton
                index={index}
                onPress={handleOnDrawerItemPress}
                routeName={item}
              />
            </Animated.View>
          );
        })}
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          style={styles.button}
          text="SIGNOUT"
          onPress={() => popupRef.current.show()}
        />
      </View>
      <GeneralPopup
        reference={popupRef}
        question
        onAccept={logoutUser}
        icon={generalImages.question}
        title="Logout"
        details="Are You Sure you want to Logout?"
      />
    </View>
    // </Animated.View>
  );
};
export default DrawerContent;
