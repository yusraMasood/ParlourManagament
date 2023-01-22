import React, {useState} from 'react';
import { Image,View } from 'react-native';
import styles from './styles';

import Ripple from '../../wrappers/Ripple';
import OutfitRegular from '../../Texts/OutfitRegular';
import LinearGradient from 'react-native-linear-gradient';

const SocialButton = (props) => {
  const handleOnPress = () => {
    if (props.onPress) {
      props.onPress();
    }
  };
  return (

    <Ripple style={[styles.container, props.style]} onPress={handleOnPress}>
        <View style={styles.contentContainer}>
        <Image source={props.icon} style={styles.socialIcon}/>
      <OutfitRegular style={[styles.text, props.textStyle]}>{props.text}</OutfitRegular>
      </View>
    </Ripple>
  );
};

export default SocialButton;