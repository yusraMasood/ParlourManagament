import React, { useState } from 'react';
import styles from './styles';
import { View } from 'react-native'

import Ripple from '../../wrappers/Ripple';
import OutfitRegular from '../../Texts/OutfitRegular';
import LinearGradient from 'react-native-linear-gradient';
import { linearColors } from '../../../utils/appTheme';

const CustomButton = (props) => {
  const handleOnPress = () => {
    if (props.onPress) {
      props.onPress();
    }
  };
  return (

    <Ripple style={[styles.container, props.style]} onPress={handleOnPress}>
      <View  style={[styles.ButtonWrapper, props.buttonStyle]}>
        <OutfitRegular style={[styles.text, props.textStyle]}>{props.text}</OutfitRegular>
      </View>
    </Ripple>
  );
};

export default CustomButton;