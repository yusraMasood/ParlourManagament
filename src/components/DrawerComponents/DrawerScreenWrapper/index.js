import React,{useRef,useEffect,useCallback} from 'react';
import {useDrawerProgress} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import styles from './styles';
import { vw } from '../../../utils/dimensions';

const DrawerScreenWrapper = props => {
  const ref = useRef();

  // useEffect(() => {
  //   // on mount
  //   ref.current.capture().then(uri => {
  //     console.log("do something with ", uri);
  //   });
  // }, [props.navigation]);

  const progress = useDrawerProgress();

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, -8 * vw],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 5 * vw],
  });

  const animatedStyles = {
    borderRadius: borderRadius,
    transform: [{scale}, {translateX}],
  };

  return (
      <Animated.View style={[styles.stack, animatedStyles]}>
         {/* <ViewShot ref={ref} options={{ fileName: "Your-File-Name",format: "jpg", quality: 0.9 }}>
         </ViewShot> */}
        {props.children}
      
      </Animated.View>
  );
};
export default DrawerScreenWrapper;