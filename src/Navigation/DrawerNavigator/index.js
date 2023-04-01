import React, {useEffect} from 'react';
import {View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {vw} from '../../utils/dimensions';
import {colors} from '../../utils/appTheme';
import DrawerContent from '../../components/DrawerComponents/DrawerContent';
import DrawerScreenWrapper from '../../components/DrawerComponents/DrawerScreenWrapper';
import TabNavigator from '../TabNavigator';
import ProfileNavigator from '../ProfileNavigator';
import TermsAndConditions from '../../screens/Drawer/TermsAndConditions';
import PrivacyPolicy from '../../screens/Drawer/PrivacyPolicy';
import TermsConditionsNavigator from '../TermsConditionsNavigator';
import PrivacyPolicyNavigator from '../PrivacyPolicyNavigator';
import ContactNavigator from '../ContactNavigator';

const Drawer = createDrawerNavigator();
const HomeStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <TabNavigator />
    </DrawerScreenWrapper>
  );
};
const ProfileStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <ProfileNavigator />
    </DrawerScreenWrapper>
  );
};
const TermsStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <TermsConditionsNavigator />
    </DrawerScreenWrapper>
  );
};
const PrivacyStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <PrivacyPolicyNavigator />
    </DrawerScreenWrapper>
  );
};
const ContactStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <ContactNavigator />
    </DrawerScreenWrapper>
  );
};

const DrawerNavigator = props => {
  return (
    <View style={{flex: 1, backgroundColor: colors.drawerBlack}}>
      <Drawer.Navigator
        drawerContent={props => {
          return <DrawerContent {...props} />;
        }}
        screenOptions={{
          drawerType: 'slide',
          headerShown: false,
          drawerStyle: {
            backgroundColor: 'transparent',
            width: '52.5%',
          },
          overlayColor: 'transparent',
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
        }}>
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="ProfileStack" component={ProfileStack} />

        <Drawer.Screen name="TermsStack" component={TermsStack} />
        <Drawer.Screen name="PrivacyStack" component={PrivacyStack} />
        <Drawer.Screen name="ContactStack" component={ContactStack} />

      </Drawer.Navigator>
    </View>
  );
};

export default DrawerNavigator;
