import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {icons} from '../../../assets/images';
import OutfitBold from '../../Texts/OutfitBold';
import OutfitRegular from '../../Texts/OutfitRegular';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const SalonCard = props => {
  // console.log("props?.id",props);
  const navigation = useNavigation();
  const {id, title, description, image, rating} = props;

  const handleSalonCardPress = () => {
    navigation.navigate('ProductDetails', {id});
  };

  return (
    <TouchableOpacity
      activeOpacity={0.99}
      style={styles.container}
      onPress={handleSalonCardPress}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.imageStyle} />
      </View>
      <View style={styles.contentContainer}>
        <OutfitBold style={styles.titleStyle}>{title}</OutfitBold>
        <OutfitRegular style={styles.descriptionStyle}>
          {description}
        </OutfitRegular>
      </View>
      <View>
        <View style={styles.ratingContainer}>
          <Image source={icons.star} style={styles.starIconStyle} />
          <OutfitRegular style={styles.ratingTextStyle}>
            {'  '}
            {rating}
          </OutfitRegular>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SalonCard;
