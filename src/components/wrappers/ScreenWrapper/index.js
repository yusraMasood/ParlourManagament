import React from 'react';
import {View} from 'react-native';
import { colors } from '../../../utils/appTheme';
import styles from './styles';

const ScreenWrapper = props => {
  return (
      <View style={[styles.containerScreen, props.style]}>
        {props.children}
      </View>
    
  );
};

export default ScreenWrapper;
