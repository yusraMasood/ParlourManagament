import moment from 'moment'
import React,{useEffect,useState} from 'react'
import { FlatList, View } from 'react-native'
import { useDispatch } from 'react-redux'
import CartCard from '../../../../components/Cards/CartCard'
import OutfitMedium from '../../../../components/Texts/OutfitMedium'
import OutfitRegular from '../../../../components/Texts/OutfitRegular'
import ContentContainer from '../../../../components/wrappers/ContentContainer'
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper'
import { getOrderDetails } from '../../../../StateManagement/OrderSlice'
import styles from "./styles"


const OrderDetails = (props) => {
    const [responseData,setResponseData] =useState(null)
    // console.log("props?.route?.params?.id",props?.route?.params?.id);

    const dispatch= useDispatch()

    useEffect(() => {
        const body={
            id:props?.route?.params?.id
                }
          dispatch(getOrderDetails(body)).then(res=>{
            console.log("res?.payload",res?.payload);
            setResponseData(res?.payload?.detail)
      
          }); 
        }, []);

    const renderItem = (props) => {
        console.log("props", props);
        return <CartCard quantity
        item={props?.item}
        
        />;
      };
    // log
    const statusColor = () => {
        switch (responseData?.status) {
            case 'pending':
                return styles.pending;
            case 'inprocess':
                return styles.inProcess;
            case 'delivered':
                return styles.completed;
            default:
                return styles.pending;
        }
    }
    const statusColorBackground = () => {
        switch (responseData?.status) {
            case 'pending':
                return styles.pendingBack;
            case 'inprocess':
                return styles.inProcessBack;
            case 'delivered':
                return styles.completedBack;
            default:
                return styles.pendingBack;
        }
    }
    return (
        <ContentContainer>
        <ScreenWrapper style={styles.container}>
         
            <View style={styles.orderContainer}>
                <View>
                    <OutfitMedium style={styles.orderId}>Order ID</OutfitMedium>
                    <OutfitMedium style={styles.orderIdValue}>{responseData?.order_number}</OutfitMedium>
                </View>
                <View>
                    <OutfitMedium style={styles.orderId}>Order Status</OutfitMedium>
                    <View style={[styles.btnContainer, statusColorBackground()]}>
                        <OutfitMedium style={[styles.status, statusColor()]}>{responseData?.status}</OutfitMedium>
                    </View>
                </View>

            </View>
            <View style={styles.placedContainer}>
                <OutfitMedium style={styles.orderId}>Placed On</OutfitMedium>
                <OutfitMedium style={styles.orderIdValue}>{moment(responseData?.createdAt).format("MMM DD YYYY HH:MM A")}</OutfitMedium>
            </View>
            <View style={styles.billingDetailsContainer}>
                <OutfitMedium style={styles.orderIdValue}>Billing Detail</OutfitMedium>
                <View style={styles.userNameContainer}>
                    <OutfitRegular style={styles.userText}>{responseData?.customer_name}</OutfitRegular>
                    <OutfitRegular style={styles.userText}>{responseData?.customer_phone}</OutfitRegular>
                </View>
                <OutfitRegular style={styles.userText}>{responseData?.shipping_address}</OutfitRegular>
            </View>
            <View style={styles.billingDetailsContainer}>
                <OutfitMedium style={styles.orderIdValue}>Shipping Detail</OutfitMedium>
                <View style={styles.userNameContainer}>
                    <OutfitRegular>{responseData?.users?.first_name} {responseData?.users.last_name}</OutfitRegular>
                    <OutfitRegular>{responseData?.users?.customer_phone}</OutfitRegular>
                </View>
                <OutfitRegular>{responseData?.billing_address}</OutfitRegular>
            </View>
            <FlatList
                data={responseData?.products}
                renderItem={renderItem}
                />
            {/* <CartCard/> */}
            <View style={styles.totalTableContainer}>
          <View style={styles.subTotalContainer}>
            <OutfitMedium style={styles.totalText}>Sub Total</OutfitMedium>
            <OutfitMedium style={styles.totalText}>${responseData?.amount}</OutfitMedium>
          </View>
          <View style={styles.hrline} />
          <View style={styles.subTotalContainer}>
            <OutfitMedium style={styles.totalText}>Shipping</OutfitMedium>
            <OutfitMedium style={styles.totalText}>${responseData?.shiiping_amount}</OutfitMedium>
          </View>
          <View style={styles.hrline} />
          <View style={styles.subTotalContainer}>
            <OutfitMedium style={styles.totalText}>Total</OutfitMedium>
            <OutfitMedium style={styles.totalText}>$273</OutfitMedium>
          </View>
        </View>

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
        
        </ScreenWrapper>
        </ContentContainer>
    )
}
export default OrderDetails