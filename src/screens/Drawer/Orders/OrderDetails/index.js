// import moment from 'moment'
import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import CartCard from '../../../../components/Cards/CartCard';
import OutfitMedium from '../../../../components/Texts/OutfitMedium';
import OutfitRegular from '../../../../components/Texts/OutfitRegular';
import ContentContainer from '../../../../components/wrappers/ContentContainer';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import moment from 'moment';
import OutfitBold from '../../../../components/Texts/OutfitBold';
import { vh } from '../../../../utils/dimensions';
import { colors } from '../../../../utils/appTheme';

const OrderDetails = props => {
  const bookingDetail = props?.route?.params?.details;
  console.log('props', bookingDetail?.timeSlot?.from);

  const [responseData, setResponseData] = useState(null);

  const renderItem = props => {
    console.log('props', props);
    return <CartCard quantity item={props?.item} />;
  };
  // log
  const statusColor = () => {
    switch (props.route?.params?.status) {
      case 'pending':
        return styles.pending;
      case 'inprocess':
        return styles.inProcess;
      case 'completed':
        return styles.completed;
      default:
        return styles.pending;
    }
  };
  const statusColorBackground = () => {
    switch (props.route?.params?.status) {
      case 'pending':
        return styles.pendingBack;
      case 'inprocess':
        return styles.inProcessBack;
      case 'completed':
        return styles.completedBack;
      default:
        return styles.pendingBack;
    }
  };
  return (
    <ScreenWrapper style={styles.container}>
      <ContentContainer>
        <View style={styles.orderContainer}>
          <View>
            <OutfitMedium style={styles.orderId}>Booking ID</OutfitMedium>
            <OutfitMedium style={styles.orderIdValue}>
              {bookingDetail?.booking_id}
            </OutfitMedium>
          </View>
          <View>
            <OutfitMedium style={styles.orderId}>Order Status</OutfitMedium>
            <View style={[styles.btnContainer, statusColorBackground()]}>
              <OutfitMedium style={[styles.status, statusColor()]}>
                {props.route?.params?.status}
              </OutfitMedium>
            </View>
          </View>
        </View>
        <View style={styles.placedContainer}>
          <OutfitMedium style={styles.orderId}>Placed On</OutfitMedium>
          <OutfitMedium style={styles.orderIdValue}>
            {moment(bookingDetail?.date).format('LL')}
          </OutfitMedium>
        </View>
        <View style={styles.placedContainer}>
          <OutfitMedium style={styles.orderId}>Time Slots</OutfitMedium>
          <OutfitMedium style={styles.orderIdValue}>
            {bookingDetail?.timeSlot?.from} - {bookingDetail?.timeSlot?.to}
          </OutfitMedium>
        </View>

        {props?.route?.params?.status === "completed" && <TouchableOpacity style={{alignItems: 'center'}} onPress={() => props?.navigation?.navigate('ReviewScreen', {id: bookingDetail?.id})}>
          <OutfitBold
            style={{
              color: colors.defaultThemeRed,
              fontSize: vh * 2.5,
              textDecorationLine: 'underline',
            }}>
            Write Review
          </OutfitBold>
        </TouchableOpacity>}
        {/* <View style={styles.placedContainer}>
          <OutfitMedium style={styles.orderId}>Services</OutfitMedium>
          <OutfitMedium style={styles.orderIdValue}>
            Menicure{'\n'}
            Menicure{'\n'}
            Waxing{'\n'}
            Makeup{'\n'}
            Eyebrows{'\n'}
            Pedicure
          </OutfitMedium>
        </View> */}
        {/* <View style={styles.billingDetailsContainer}>
                <OutfitMedium style={styles.orderIdValue}>Billing Detail</OutfitMedium>
                <View style={styles.userNameContainer}>
                    <OutfitRegular style={styles.userText}>{responseData?.customer_name}</OutfitRegular>
                    <OutfitRegular style={styles.userText}>{responseData?.customer_phone}</OutfitRegular>
                </View>
                <OutfitRegular style={styles.userText}>{responseData?.shipping_address}</OutfitRegular>
            </View> */}
        {/* <View style={styles.billingDetailsContainer}>
                <OutfitMedium style={styles.orderIdValue}>Shipping Detail</OutfitMedium>
                <View style={styles.userNameContainer}>
                    <OutfitRegular>{responseData?.users?.first_name} {responseData?.users.last_name}</OutfitRegular>
                    <OutfitRegular>{responseData?.users?.customer_phone}</OutfitRegular>
                </View>
                <OutfitRegular>{responseData?.billing_address}</OutfitRegular>
            </View> */}
        {/* <FlatList
                data={responseData?.products}
                renderItem={renderItem}
                /> */}
        {/* <CartCard/> */}
        {/* <View style={styles.totalTableContainer}>
          <View style={styles.subTotalContainer}>
            <OutfitMedium style={styles.totalText}>Sub Total</OutfitMedium>
            <OutfitMedium style={styles.totalText}>$2345</OutfitMedium>
          </View>
          <View style={styles.hrline} />
          <View style={styles.subTotalContainer}>
            <OutfitMedium style={styles.totalText}>Shipping</OutfitMedium>
            <OutfitMedium style={styles.totalText}>$100</OutfitMedium>
          </View>
          <View style={styles.hrline} />
          <View style={styles.subTotalContainer}>
            <OutfitMedium style={styles.totalText}>Total</OutfitMedium>
            <OutfitMedium style={styles.totalText}>$2445</OutfitMedium>
          </View>
        </View> */}

        {/* 
            <View style={styles.subTotalContainer}>
                <OutfitMedium style={styles.totalText}>Sub Total</OutfitMedium>
                <OutfitMedium style={styles.totalText}>$273</OutfitMedium>
            </View>
            <View style={styles.hrline} />
            <View style={styles.itemContainer}>
                <OutfitMedium style={styles.totalText}>I Item</OutfitMedium>
            </View>
            <View style={styles.totalContainer}>
                <OutfitMedium style={styles.totalText}>Total</OutfitMedium>
                <OutfitMedium style={styles.totalText}>$273</OutfitMedium>
            </View> */}
      </ContentContainer>
    </ScreenWrapper>
  );
};
export default OrderDetails;
