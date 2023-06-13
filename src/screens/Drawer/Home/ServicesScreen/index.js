import React, {useState, useEffect} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import OutfitMedium from '../../../../components/Texts/OutfitMedium';
import styles from './styles';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import {generalImages} from '../../../../assets/images';
import useBooking from '../../../../Hooks/useBooking';
import SalonCard from '../../../../components/Cards/SalonCard';
import {vh, vw} from '../../../../utils/dimensions';
import OutfitRegular from '../../../../components/Texts/OutfitRegular';
import {colors} from '../../../../utils/appTheme';
import OutfitBold from '../../../../components/Texts/OutfitBold';

const ServicesScreen = props => {
  const services = props?.route?.params?.services;

  console.log('services', services);

  //   const {getNearestSalons} = useBooking();

  //   const [refreshing, setRefreshing] = useState(false);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [responseData, setResponseData] = useState(null);

  // const handleOnEndReached = () => {
  //   getData();
  // };

  //   const handleOnRefresh = () => {
  //     // setCurrentPage(1);
  //     setRefreshing(true);
  //   };

  //   const getData = async () => {
  //     if (!isLoading) {
  //       setIsLoading(true);
  //       try {
  //         // const data = {
  //         //   page: currentPage,
  //         //   per_page: 10,
  //         //   service: serviceId,
  //         // };
  //         const response = await getNearestSalons();
  //         console.log('response', response);
  //         setResponseData(response?.detail);
  //         // if (response?.current_page === 1) {
  //         //   setFavPhotographer(response?.data);
  //         // } else {
  //         //   setFavPhotographer(prev => prev.concat(response?.data));
  //         // }
  //         // if (response?.data?.length) {
  //         //   setCurrentPage(response?.current_page + 1);
  //         // } else {
  //         //   setCurrentPage(null);
  //         // }
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     }
  //   };

  //   useEffect(() => {
  //     // if (currentPage === 1) {
  //     //   getData();
  //     // }
  //     if (refreshing) {
  //       getData();
  //       setRefreshing(false);
  //     }
  //   }, [refreshing]);

  //   useEffect(() => {
  //     getData();
  //   }, []);

  const handleBookPress = (item) => {
    props?.navigation.navigate('BookingScreen', {
      serviceId: item?._id,
    });
  };

  const renderFoodItems = ({item}) => {
    // console.log("props",props);
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          padding: vw * 5,
          marginTop: vh * 2,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderRadius: vw * 2,
          borderWidth: 1,
          borderColor: colors.white,
        }}
        onPress={() => handleBookPress(item)}
        activeOpacity={0.99}>
        <OutfitBold style={{color: colors.white, fontSize: vh * 2}}>
          {item?.service_name}
        </OutfitBold>
        <OutfitMedium style={{color: colors.white, fontSize: vh * 2}}>
          Price:{' '}
          <OutfitRegular style={{color: colors.white, fontSize: vh * 1.6}}>
            {item?.price}
          </OutfitRegular>
        </OutfitMedium>
      </TouchableOpacity>
    );
    return (
      <SalonCard
        id={item?._id}
        title={item?.title}
        description={item?.description}
        image={generalImages.defaultImage}
        // image={item?.image ? item?.image : generalImages.noImage}
        rating={item?.averageRating}
      />
    );
  };

  const renderHeader = (
    <View>
      <OutfitRegular style={styles.dietTextProducts}>
        Top Services to Choose
      </OutfitRegular>
    </View>
  );

  return (
    <ScreenWrapper style={styles.containerMain}>
      <FlatList
        data={services}
        renderItem={renderFoodItems}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.footer}
        // refreshing={refreshing}
        // onRefresh={handleOnRefresh}
        showsVerticalScrollIndicator={false}
        // ListFooterComponent={() => <View style={styles.footer} />}
      />
    </ScreenWrapper>
  );
};
export default ServicesScreen;
