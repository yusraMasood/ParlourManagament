import React, {useImperativeHandle, useRef, useState} from 'react';
import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import {icons} from '../../../assets/images';
import { colors } from '../../../utils/appTheme';
import OutfitRegular from '../../Texts/OutfitRegular';

import styles from './styles';

const InputField = props => {
  const [isPassword, setIsPassword] = useState(props.isPassword);
  const inputRef = useRef(null);
  useImperativeHandle(props?.reference, () => ({
    focus: focus,
    blur: blur,
  }));
  const focus = () => {
    inputRef.current.focus();
  };
  const blur = () => {
    inputRef.current.blur();
  };
  return (
    <View style={[styles.container, props.inputContainerStyle]}>
      <View style={styles.labelContainer}>
        <OutfitRegular style={styles.label}>{props.label}</OutfitRegular>
        {props.require && (
          <OutfitRegular style={styles.require}>*</OutfitRegular>
        )}
      </View>
      <View style={[styles.inputWithIcon, props.inputContainerIcon]}>
          <TextInput
            {...props}
            ref={inputRef}
            secureTextEntry={isPassword}
            value={props.value}
            onChangeText={props.onChangeText}
            style={[styles.input, props.inputContainer]}
            placeholder={props.placeholder}
            placeholderTextColor={colors.greyText}
            // {...props}
          />
        {props.rightIcon2 && (
          <TouchableOpacity activeOpacity={0.8}>
            <Image source={props.rightIcon2} style={styles.icon2} />
          </TouchableOpacity>
        )}
        {props.rightIcon && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setIsPassword(!isPassword)}>
            <Image
              source={isPassword ? icons.eyesOff : icons.eye}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputField;
