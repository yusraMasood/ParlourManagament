import React from 'react';
import {Image, Text, View, ImageBackground} from 'react-native';
import {drawerIcons, generalImages, icons, tabIcons} from '../../assets/images';
import SvgCircle from '../../components/Header';
import OutfitBold from '../../components/Texts/OutfitBold';
import OutfitRegular from '../../components/Texts/OutfitRegular';
import RippleHOC from '../../components/wrappers/Ripple';
import {colors} from '../../utils/appTheme';
import {vh, vw} from '../../utils/dimensions';

import styles from './styles';

const routesWithBackIcon = {
  MapScreen: 'Location',
  SalonListScreen: 'Salons',
  ProductDetails: 'ProductDetails',
  OrderDetails: 'OrderDetails',
  EditProfileScreen: 'Edit Profile',
  BookingScreen: 'Book A Salon',
  ServicesScreen: 'ServicesScreen',
  ReviewScreen: "Post Review"
};
const routesWithMenu = {
  HomeScreen: 'Home',
  MyProfileScreen: 'My Profile',
  TermsAndConditions: 'Terms And Conditions',
  PrivacyPolicy: 'Privacy Policy',
  MyOrders: 'MyOrders',
  ContactUs: 'ContactUs',
};

const routesWithNotification = {};

const routesWithLocation = {
  HomeScreen: 'Home',
};

const titles = {
  HomeScreen: 'Home',
  MapScreen: 'Location',
  SalonListScreen: 'Salons',
  ProductDetails: 'Salon Detail',
  MyOrders: 'Booking',
  OrderDetails: 'Booking  Details',
  EditProfileScreen: 'Edit Profile',
  MyProfileScreen: 'My Profile',
  TermsAndConditions: 'Terms And Conditions',
  PrivacyPolicy: 'Privacy Policy',
  ContactUs: 'Contact Us',
  BookingScreen: 'Book A Salon',
  ServicesScreen: 'Services',
  ReviewScreen: "Post Review"
};

const NavigationOptions = navProps => {
  return {
    headerTitle: () => renderTitle(navProps),
    headerRight: () => renderheaderRight(navProps),
    headerLeft: () => renderheaderLeft(navProps),
    headerBackground: () => renderHeaderBackground(navProps),
    headerTitleAlign: 'center',

    headerLeftContainerStyle: {paddingLeft: 4 * vw},
    headerRightContainerStyle: {paddingRight: 4 * vw},
  };
};
const renderTitle = props => {
  if (titles[props?.route?.name]) {
    return (
      <OutfitBold style={styles.titleText}>
        {titles[props?.route?.name]}
      </OutfitBold>
    );
  }
};

const renderHeaderBackground = props => {
  return <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.9)'}}></View>;
};

const renderheaderLeft = props => {
  if (routesWithBackIcon[props?.route?.name]) {
    return (
      <RippleHOC
        activeOpacity={0.7}
        style={styles.leftContainer}
        onPress={() => props.navigation.goBack()}>
        <Image source={icons.leftArrow} style={styles.backIcon} />
      </RippleHOC>
    );
  }
  if (routesWithMenu[props?.route?.name]) {
    return (
      <RippleHOC
        activeOpacity={0.7}
        // style={styles.leftContainer}
        onPress={() => props.navigation.toggleDrawer()}>
        <Image source={icons.menu} style={styles.menuIcon} />
      </RippleHOC>
    );
  }
  // return (
  //   <View>
  //     <Image source={generalImages.headerLogo} style={styles.logo} />
  //   </View>
  // );
};

const renderheaderRight = props => {
  if (routesWithNotification[props?.route?.name]) {
    return (
      <View>
        <Image source={icons.circle} style={styles.circle} />
        <RippleHOC
          onPress={() => props.navigation.navigate('NotificationScreen')}>
          <Image source={icons.notification} style={styles.bellIcon} />
        </RippleHOC>
      </View>
    );
  }
  if (routesWithLocation[props?.route?.name]) {
    return (
      <RippleHOC onPress={() => props.navigation.navigate('MapScreen')}>
        <Image source={icons.locationIcon} style={styles.locationIconStyle} />
      </RippleHOC>
    );
  }
};

export const drawerRoutes = {
  HomeStack: {
    label: 'Home',
  },

  ProfileStack: {
    label: 'My Profile',
  },
  ContactStack: {
    label: 'Contact Us',
  },

  PrivacyStack: {
    label: 'Privacy Policy',
  },
};

export default NavigationOptions;
