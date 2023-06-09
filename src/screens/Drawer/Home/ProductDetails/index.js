import React, {useEffect, useState} from 'react';
import {View, Image, ImageBackground, FlatList, ScrollView} from 'react-native';
import {generalImages, icons} from '../../../../assets/images';
import CustomButton from '../../../../components/Buttons/CustomButton';
import OutfitMedium from '../../../../components/Texts/OutfitMedium';
import OutfitRegular from '../../../../components/Texts/OutfitRegular';
import ContentContainer from '../../../../components/wrappers/ContentContainer';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import {linearColors} from '../../../../utils/appTheme';
import styles from './styles';
import useBooking from '../../../../Hooks/useBooking';

const ProductDetails = props => {
  const id = props?.route?.params?.id;

  const {getSalonDetail} = useBooking();

  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState({});

  const handleBookPress = () => {
    props?.navigation.navigate('BookingScreen');
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
  console.log('productDetail', responseData);
  return (
    <ScreenWrapper>
      <ContentContainer style={styles.scroll}>
        <View style={styles.productImages}>
          <FlatList
            data={[1, 2, 3]}
            horizontal={true}
            renderItem={renderProductImage}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.centerContent}>
          <OutfitMedium style={styles.veganHeadText}>
            {responseData?.title}
          </OutfitMedium>
          <OutfitRegular style={styles.paraText}>
            {responseData?.description}
          </OutfitRegular>
        </View>
        <View style={styles.centerContent}>
          <OutfitMedium style={styles.veganHeadText}>Services :</OutfitMedium>
          {responseData?.services?.map(item => {
            return (
              <OutfitRegular style={styles.paraText}>
                {item?.service_name + '     ' + 'Rs ' + item?.price}
              </OutfitRegular>
            );
          })}
          {/* <OutfitRegular style={styles.paraText}>
            Menicure 500{'\n'}
            Pedicure 500{'\n'}
            waxing 500{'\n'}
          </OutfitRegular> */}
        </View>

        <View style={styles.ContentContainer}>
          <CustomButton
            text="Book Salon"
            style={styles.btnView}
            onPress={handleBookPress}
            // linearColors={linearColors.white}
            // buttonStyle={styles.buttonStyle}
            // textStyle={styles.btnText}
          />
        </View>
      </ContentContainer>
    </ScreenWrapper>
  );
};
export default ProductDetails;
