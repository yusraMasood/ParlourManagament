import React, {useState} from 'react';
import {View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {generalImages, icons} from '../../../assets/images';
import OutfitBold from '../../Texts/OutfitBold';
import OutfitMedium from '../../Texts/OutfitMedium';
import OutfitRegular from '../../Texts/OutfitRegular';
import RippleHOC from '../../wrappers/Ripple';
import styles from './styles';
import {linearColors} from '../../../utils/appTheme';
import CircularSemiBold from '../../Texts/CircularSemiBold';
import OutfitSemiBold from '../../Texts/OutfitSemiBold';
// import {getCartItems, postAddToCart} from '../../../StateManagement/HomeSlice';
// import {useDispatch} from 'react-redux';

const CartCard = props => {
  // console.log("props.title",props.title);
  // console.error(props);
  // const dispatch = useDispatch();
  const [Productcount, setProductCount] = useState(
    props?.quantity1 ? props?.quantity1 : 0,
  );
  const productIncrement = () => {
    const body = {
      id: props?.id,
      quantity: Productcount + 1,
    };
    // dispatch(postAddToCart(body)).then(({type}) => {
    //   if (type == 'home/addCart/fulfilled') {
    //     setProductCount(Productcount + 1);
    //     dispatch(getCartItems());
    //   }
    // });
  };
  const productDecrement = () => {
    if (Productcount > 1) {
      //   setProductCount(Productcount - 1);
      // props.updateDataCount(Productcount - 1,props.id)
      const body = {
        id: props?.id,
        quantity: Productcount - 1,
      };
      // dispatch(postAddToCart(body)).then(({type}) => {
      //   if (type == 'home/addCart/fulfilled') {
      //     setProductCount(Productcount - 1);
      //     dispatch(getCartItems());
      //   }
      // });
    }
  };
  // const updateDataCount = (data, id) => {
  //   console.warn("data",id,data);

  //   const body = {
  //     id: id,
  //     quantity: data,
  //   };
  //   dispatch(postAddToCart(body)).then(({type})=>{
  //     if(type=="home/addCart/fulfilled")
  //     setProductCount(data);
  //   });
  // };

  return (
    <View style={[styles.container, props.cartStyle]}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={
              props?.image ? {uri: props?.image} : generalImages.defaultImg
            }
          />
        </View>
        <View style={styles.textContainer}>
          <OutfitMedium style={styles.headingText}>{props?.title}</OutfitMedium>
          <OutfitRegular style={styles.colorText} numberOfLines={1}>
            {props?.description}
          </OutfitRegular>
          <View style={styles.priceContainer}>
            <CircularSemiBold style={styles.dollarText}>$</CircularSemiBold>
            <OutfitBold style={styles.priceText}>{props.price}</OutfitBold>
          </View>
        </View>
      </View>
      {props.quantity && (
        <OutfitSemiBold style={styles.quantityText}>
          Quantity: {props.quantity}
        </OutfitSemiBold>
      )}
      {props.counter && (
        <View style={styles.cartOuterContainer}>
          <View style={[styles.cartContainer]}>
            <RippleHOC onPress={productDecrement} style={styles.plusContainer}>
              <Image source={icons.minus} style={styles.minusIcon} />
            </RippleHOC>
            <View>
              <OutfitMedium style={styles.countText}>
                {Productcount}
              </OutfitMedium>
            </View>
            <LinearGradient
              colors={linearColors.defaultRed}
              style={styles.plusContainer}>
              <RippleHOC
                onPress={productIncrement}
                style={styles.plusContainer}>
                <Image source={icons.plus} style={styles.plusIcon} />
              </RippleHOC>
            </LinearGradient>
          </View>
        </View>
      )}
    </View>
  );
};
export default CartCard;
