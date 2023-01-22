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

const ProductDetails = props => {



  const updateData = data => {
    // setProductCount(data);
  };
 
  const renderProductImage = ({item}) => {
    // console.log(item?.image_url);
    return (
      <ImageBackground
        source={ generalImages.salon
        }
        style={styles.foodImage}
        imageStyle={styles.imgBorder}>
   
      </ImageBackground>
    );
  };
  // console.log("productDetail?.media", productDetail);
  return (
    <ContentContainer contentContainerStyle={styles.scroll}>
      <ScreenWrapper style={styles.container}>
        <View style={styles.productImages}>
          <FlatList
            data={[1,2,3]}
            horizontal={true}
            renderItem={renderProductImage}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.centerContent}>
          <OutfitMedium style={styles.veganHeadText}>
            Zareena Beauty Palour
          </OutfitMedium>
          <OutfitRegular style={styles.paraText}>
           Zareena is very Popular salon in karachi. Many celebrities have visited this salon and loved it. one of the famous celebrities is Minal khan, Mahira khan,
           and ayeza khan.
          </OutfitRegular>
       
        </View>
        <View style={styles.centerContent}>
          <OutfitMedium style={styles.veganHeadText}>
            Services :
          </OutfitMedium>
          <OutfitRegular style={styles.paraText}>
           Menicure 500{"\n"}
           Pedicure 500{"\n"}
           waxing 500{"\n"}
          </OutfitRegular>
        </View>

        <View style={styles.ContentContainer}>
          <CustomButton
            text="Book Salon"
            style={styles.btnView}
            // onPress={() => props.navigation.navigate('MyOrders')}
            // linearColors={linearColors.white}
            // buttonStyle={styles.buttonStyle}
            // textStyle={styles.btnText}
          />
        </View>
      </ScreenWrapper>
    </ContentContainer>
  );
};
export default ProductDetails;
