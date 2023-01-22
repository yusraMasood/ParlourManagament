import React, {useRef, useEffect} from 'react';
import styles from './styles';
import DrawerButton from '../DrawerButton';
import {useDispatch} from 'react-redux';
import {Image, View, Text} from 'react-native';
// import Animated from 'react-native-reanimated';
import {useDrawerProgress} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {vh, vw} from '../../../utils/dimensions';
import {generalImages, icons} from '../../../assets/images';
import OutfitRegular from '../../Texts/OutfitRegular';
import {drawerRoutes} from '../../../Navigation/NavigationOptions';
import Animated from 'react-native-reanimated';
import CustomButton from '../../Buttons/CustomButton';
import GeneralPopup from '../../popups/GeneralPopup';
// import {useSelector} from 'react-redux';
import {
  logout,
  LogoutUser,
  selectUser,
} from '../../../StateManagement/UserSlice';

const routeOrders = [
  'HomeStack',
  'VideoStack',
  'SessionStack',
  'WaterStack',
  'WeightStack',
  'WorkoutStack',
  'ReminderStack',
  'FoodStack',
  'OrderStack',
  'SubscriptionStack',
  'MealStack',
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
    // dispatch(logout)
    // dispatch(logout());
    dispatch(LogoutUser());
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
      {/* <Animated.View style={[styles.header, animatedStylesImage]}>
        <View style={styles.profileImageContainer}>
          <Image
            source={
              userDetails?.image
                ? {uri: userDetails?.image_url}
                : generalImages.defaultUserImage
            }
            style={styles.profileImage}
          />
        </View>

        <View style={styles.headerRight}>
          <OutfitRegular style={styles.username}>
            {userDetails?.first_name} {userDetails?.last_name}
          </OutfitRegular>
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
      /> */}
    </View>
    // </Animated.View>
  );
};
export default DrawerContent;
