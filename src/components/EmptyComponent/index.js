import React from 'react';
import {View} from 'react-native';
import OutfitRegular from '../Texts/OutfitRegular';
import styles from './styles';

const EmptyComponent = props => {
  return (
    <View style={styles.emptyContainer}>
      <OutfitRegular style={styles.emptyText}>
        {props.text ? props.text : 'No record found'}
      </OutfitRegular>
    </View>
  );
};
export default EmptyComponent;
