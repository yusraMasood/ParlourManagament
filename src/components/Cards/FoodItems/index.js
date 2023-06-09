import React from 'react'
import { View, Image } from 'react-native'
import { generalImages } from '../../../assets/images';
import OutfitBold from '../../Texts/OutfitBold';
import OutfitRegular from '../../Texts/OutfitRegular';
import RippleHOC from '../../wrappers/Ripple';
import styles from "./styles"
import { useNavigation } from '@react-navigation/native';

const FoodItems = (props) => {
  // console.log("props?.id",props);
  const navigation = useNavigation()
  const {id, title, description} = props
  return (

    <View style={styles.veganOuterContainer}>
      <View style={styles.veganContainer}>
        <View>
          <OutfitBold style={styles.veganText}>{title}</OutfitBold>
          <OutfitRegular style={styles.priceText} numberOfLines={2}>{description}</OutfitRegular>
          {/* <RippleHOC >
          <OutfitRegular style={styles.cartText}>Add To Cart</OutfitRegular>
          </RippleHOC> */}
        </View>
      </View>
      <RippleHOC onPress={() => navigation.navigate('ProductDetails',{id})} style={styles.productImageContainer}>
        <Image source={props.image ? { uri: props.image } : generalImages.salon} style={styles.dietImage} />
      </RippleHOC>

    </View>
  );
};

export default FoodItems;
