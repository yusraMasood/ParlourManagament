import React, {useRef, useImperativeHandle} from 'react';
import {Platform, TextInput, View} from 'react-native';
import OutfitRegular from '../../Texts/OutfitRegular';
import styles from './styles';

const InputContainer = props => {
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
    <View style={[styles.textinputContainer, props.style]}>
      <View style={styles.titleContainer}>
        <OutfitRegular style={styles.labelText}>{props.label}</OutfitRegular>
        {props.required && (
          <OutfitRegular style={styles.stericText}>*</OutfitRegular>
        )}
      </View>
      <TextInput
        {...props}
        ref={inputRef}
        placeholder={props.placeholder}
        multiline={true}
        allowFontScaling={false}
        numberOfLines={5}
        minHeight={Platform.OS === 'ios' && 3 ? 20 * 5 : null}
        style={styles.inputContainer}
      />
    </View>
  );
};
export default InputContainer;
