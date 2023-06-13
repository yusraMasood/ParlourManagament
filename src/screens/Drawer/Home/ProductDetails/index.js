import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  ImageBackground,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Linking,
  RefreshControl,
} from 'react-native';
import {generalImages, icons} from '../../../../assets/images';
import CustomButton from '../../../../components/Buttons/CustomButton';
import OutfitMedium from '../../../../components/Texts/OutfitMedium';
import OutfitRegular from '../../../../components/Texts/OutfitRegular';
import ContentContainer from '../../../../components/wrappers/ContentContainer';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import {colors, linearColors} from '../../../../utils/appTheme';
import styles from './styles';
import useBooking from '../../../../Hooks/useBooking';
import OutfitSemiBold from '../../../../components/Texts/OutfitSemiBold';
import {vh, vw} from '../../../../utils/dimensions';
import moment from 'moment';
import {Rating} from 'react-native-ratings';

const ProductDetails = props => {
  const id = props?.route?.params?.id;

  const {getSalonDetail} = useBooking();

  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState({});

  const handleOnRefresh = () => {
    getData();
  };

  const handleServices = () => {
    props?.navigation.navigate('ServicesScreen', {
      services: responseData?.services,
    });
  };

  const openMap = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${responseData?.location?.coordinates[0]},${responseData?.location?.coordinates[1]}`;
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  const handleBookPress = () => {
    // props?.navigation.navigate('BookingScreen');
    props?.navigation.navigate('ServicesScreen', {
      services: responseData?.services,
    });
  };

  const getData = async () => {
    if (!isLoading) {
      setIsLoading(true);
      try {
        const res = await getSalonDetail(id);
        setResponseData(res?.detail[0]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const updateData = data => {
    // setProductCount(data);
  };

  const renderProductImage = ({item}) => {
    // console.log(item?.image_url);
    return (
      <ImageBackground
        source={generalImages.salon}
        style={styles.foodImage}
        imageStyle={styles.imgBorder}></ImageBackground>
    );
  };
  console.log('productDetail', responseData?.services);
  return (
    <ScreenWrapper>
      <ContentContainer
        contentContainerStyle={styles.scroll}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleOnRefresh} />
        }>
        <View style={styles.productImages}>
          <FlatList
            data={[1, 2, 3]}
            horizontal={true}
            renderItem={renderProductImage}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.headerContainer}>
          <View style={{flex: 1}}>
            <OutfitMedium style={styles.veganHeadText}>
              {responseData?.title}
            </OutfitMedium>
          </View>
          <TouchableOpacity
            onPress={handleServices}
            activeOpacity={0.99}
            style={styles.serviceBtnContainer}>
            <OutfitRegular style={styles.textBtnStyle}>
              View Services
            </OutfitRegular>
          </TouchableOpacity>
          <TouchableOpacity onPress={openMap} activeOpacity={0.99}>
            <OutfitRegular style={styles.textBtnStyle}>
              Get Location
            </OutfitRegular>
          </TouchableOpacity>
        </View>
        <OutfitSemiBold style={styles.reviewTextStyle}>
          Description
        </OutfitSemiBold>
        <OutfitRegular style={styles.paraText}>
          {responseData?.description}
        </OutfitRegular>
        {/* <View style={styles.centerContent}>
          <OutfitMedium style={styles.veganHeadText}>Services :</OutfitMedium>
          {responseData?.services?.map(item => {
            return (
              <OutfitRegular style={styles.paraText}>
                {item?.service_name + '     ' + 'Rs ' + item?.price}
              </OutfitRegular>
            );
          })}
        </View> */}

        <View style={styles.ContentContainer}>
          <CustomButton
            text="Book Salon"
            style={styles.btnView}
            onPress={handleBookPress}
          />
        </View>
        <OutfitSemiBold style={styles.reviewTextStyle}>
          Rating & Reviews
        </OutfitSemiBold>
        <View style={{}}>
          {responseData?.reviews?.map(item => {
            return (
              <View
                style={{
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  padding: vw * 3,
                  borderRadius: vw * 3,
                  marginVertical: vh * 1,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <OutfitMedium
                    style={{color: colors.white, fontSize: vh * 2.1}}>
                    {item?.user[0]?.name}
                  </OutfitMedium>
                  <Rating
                    type="custom"
                    ratingImage={icons.star}
                    ratingColor="transparent"
                    ratingBackgroundColor="transparent"
                    ratingCount={item?.rating}
                    imageSize={15}
                    readonly
                    onFinishRating={this.ratingCompleted}
                    // style={{paddingVertical: 10}}
                  />
                </View>
                <OutfitRegular
                  style={{
                    color: colors.white,
                    fontSize: vh * 1.7,
                    marginTop: vh * 1,
                  }}>
                  {item?.comment}
                </OutfitRegular>
                <View style={{alignItems: 'flex-end'}}>
                  <OutfitRegular
                    style={{
                      color: colors.white,
                      fontSize: vh * 1.7,
                      marginTop: vh * 1,
                    }}>
                    {moment(item?.createdAt).format('LL')}
                  </OutfitRegular>
                </View>
              </View>
            );
          })}
        </View>
      </ContentContainer>
    </ScreenWrapper>
  );
};
export default ProductDetails;
