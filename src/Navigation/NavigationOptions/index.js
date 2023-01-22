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
  ProductDetails:"ProductDetails",
  OrderDetails:"OrderDetails"
};
const routesWithMenu = {
  
};

const routesWithNotification = {


};
const titles = {
  HomeScreen:"Home",
  ProductDetails:"Salon Detail",
  MyOrders:"MyTabs",
  OrderDetails:"Booking  Details"

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
    return (
      <SvgCircle/>
    );
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
};

export const drawerRoutes = {
  WaterStack: {
    label: 'Water Reminder',
  },
  HomeStack: {
    label: 'Home',
  },
  WeightStack: {
    label: 'Weight Tracker',
  },
  OrderStack: {
    label: 'My Orders',
  },
  // MealStack: {
  //   label: 'Meal Plans',
  // },
  FoodStack: {
    label: 'Food Intake - Logs',
  },
  VideoStack: {
    label: 'On Demand Videos',
  },

  SubscriptionStack: {
    label: 'Subscription Logs',
  },
  WorkoutStack: {
    label: 'Workout Reminder',
  },
  ProfileStack: {
    label: 'My Profile',
  },
  ContactStack: {
    label: 'Contact Us',
  },
  ReminderStack: {
    label: 'Reminders Listing',
  },
  PrivacyStack: {
    label: 'Privacy Policy',
  },
  TermsStack: {
    label: 'Terms & Conditions',
  },
  SessionStack: {
    label: 'Online Sessions',
  },
};

export default NavigationOptions;
