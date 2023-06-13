import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import OutfitBold from '../../Texts/OutfitBold';
import OutfitRegular from '../../Texts/OutfitRegular';
import RippleHOC from '../../wrappers/Ripple';
import {generalImages, icons} from '../../../assets/images';
import OutfitMedium from '../../Texts/OutfitMedium';

const OrderCard = props => {
  const {bookingId, price} = props;
  // console.log("props",props);
  const statusColor = () => {
    switch (props?.item?.status) {
      case 'pending':
        return styles.pending;
      case 'inprocess':
        return styles.inProcess;
      case 'delivered':
        return styles.completed;
      default:
        return styles.pending;
    }
  };
  const statusColorBackground = () => {
    switch (props?.item?.status) {
      case 'pending':
        return styles.pendingBack;
      case 'inprocess':
        return styles.inProcessBack;
      case 'delivered':
        return styles.completedBack;
      default:
        return styles.pendingBack;
    }
  };
  return (
    <RippleHOC
      style={[styles.container, props.containerStyle]}
      onPress={props.onPress}>
      <View>
        <OutfitMedium style={[styles.cancelText]}>
          Booking ID: {bookingId}
        </OutfitMedium>
        {/* <OutfitRegular style={styles.orderText}>{props?.item?.products[0]?.title}</OutfitRegular> */}
        {/* <OutfitRegular style={styles.dateText}>{moment(props?.item?.createdAt).format("MMM DD YYYY HH:MM A")}</OutfitRegular> */}
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={[styles.btnContainer, statusColorBackground()]}>
          <OutfitMedium style={[styles.status, statusColor()]}>
            {props?.item?.status}
          </OutfitMedium>
        </View>
        {/* <OutfitRegular style={styles.priceText}>${price}</OutfitRegular> */}
      </View>
    </RippleHOC>
  );
};
export default OrderCard;
{
  /* <View style={styles.rightIconContainer}>
       <Image source={icons.rightArrow} style={styles.rightIcon}/>
     </View> */
}
{
  /* //, statusColor() */
}
