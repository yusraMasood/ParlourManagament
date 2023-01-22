import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const ScreenWrapper = props => {
  return (
    <View
      style={{
        // backgroundColor: 'blue',
        flex: 1,
        // marginTop: vh * 1,
      }}>
      <View style={styles.container}></View>

      <View style={[styles.containerScreen, props.style]}>
        {props.children}
      </View>
    </View>
  );
};

export default ScreenWrapper;
