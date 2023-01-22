import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {icons} from '../../assets/images';
import OutfitRegular from '../Texts/OutfitRegular';
import RippleHOC from '../wrappers/Ripple';
import styles from './styles';

const CustomDropdown = props => {
  // console.log('props.dropdownValue', props.dropdownValue);
  // console.log("props", props);
  const savedropdownValue = item => {
    console.warn('item', item);
    props.setDropdownValue(item);
    props.setDropdown(false);
  };
  return (
    <View>
      <RippleHOC
        style={[styles.statusContainer, props.statusStyle]}
        onPress={() => props.setDropdown(!props.dropdown)}>
        <OutfitRegular style={styles.statusText}>
          {props.dropdownValue?.title
            ? props.dropdownValue?.title
            : props.dropdownValue
            ? props.dropdownValue
            : props.dropdownTitle}
        </OutfitRegular>
        <Image source={icons.arrowDown} style={styles.icon} />
      </RippleHOC>
      <View style={styles.dropdownContainer}>
        {props.dropdown && (
          <View style={styles.dropdownValues}>
            {props.array.map((item, index) => {
              console.warn(item);
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => savedropdownValue(item)}
                  style={styles.noOfTimes}>
                  <OutfitRegular>
                    {item?.title ? item?.title : item}
                  </OutfitRegular>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </View>
    </View>
  );
};
export default CustomDropdown;
