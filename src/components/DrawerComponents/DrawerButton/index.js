import {useDrawerProgress} from '@react-navigation/drawer';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Animated from 'react-native-reanimated';
import { drawerRoutes } from '../../../Navigation/NavigationOptions';
// import {drawerRoutes} from '../../../navigation/navigationOptions';
import { vw } from '../../../utils/dimensions';
import OutfitRegular from '../../Texts/OutfitRegular';
import RippleHOC from '../../wrappers/Ripple';
import styles from './styles';

// const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const DrawerButton = props => {
  // console.log('sjsj;s');
  // const progress = useDrawerProgress();
  // const translateX = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [-40 * vw * (props.index + 1), 0],
  // });
  // const animatedStyles = {
  //   transform: [{translateX}],
  // };
  const routeConfigs = drawerRoutes[props.routeName];
  // console.log("route",routeConfigs);
  // console.log('DrawerButton :', routeConfigs);
  if (!routeConfigs) {
    return null;
  }
  return (
    // <AnimatedTouchable
    //   onPress={() => props.onPress(props.routeName)}
    //   style={[styles.container, animatedStyles]}>
    <RippleHOC onPress={() => props.onPress(props.routeName)}>
    <View style={styles.drawerButtonContainer}>
      {/* <View style={styles.iconContainer}>
        <Image style={styles.icon} source={routeConfigs.icon} />
      </View> */}
      <View style={styles.text}>
      <OutfitRegular style={styles.label}>
        {routeConfigs.label}
      </OutfitRegular>
      </View>
      </View>
      </RippleHOC>
    // </AnimatedTouchable>
  );
};

export default DrawerButton;