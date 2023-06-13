import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import OutfitMedium from '../../../../components/Texts/OutfitMedium';
import styles from './styles';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import {generalImages} from '../../../../assets/images';
import useBooking from '../../../../Hooks/useBooking';
import SalonCard from '../../../../components/Cards/SalonCard';
import EmptyComponent from '../../../../components/EmptyComponent';
import { urls } from '../../../../Api/configs';

const SalonListScreen = props => {
  const serviceId = props?.route?.params?.serviceId;
  const lat = props?.route?.params?.lat ?? '';
  const lng = props?.route?.params?.lng ?? '';

  // console.log("type", typeof lat);

  const {getNearestSalons} = useBooking();

  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);

  // const handleOnEndReached = () => {
  //   getData();
  // };

  const handleOnRefresh = () => {
    // setCurrentPage(1);
    setRefreshing(true);
  };

  const getData = async () => {
    if (!isLoading) {
      setIsLoading(true);
      try {
        const data = {
          // page: currentPage,
          // per_page: 10,
        };
        if (props?.route?.params?.serviceId) {
          data.serviceId = serviceId;
        }
        if (props?.route?.params?.lat) {
          data.lat = lat;
        }
        if (props?.route?.params?.lng) {
          data.long = lng;
        }
        const response = await getNearestSalons(data);
        console.log('response', response);
        setResponseData(response?.detail);
        // if (response?.current_page === 1) {
        //   setFavPhotographer(response?.data);
        // } else {
        //   setFavPhotographer(prev => prev.concat(response?.data));
        // }
        // if (response?.data?.length) {
        //   setCurrentPage(response?.current_page + 1);
        // } else {
        //   setCurrentPage(null);
        // }
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    // if (currentPage === 1) {
    //   getData();
    // }
    if (refreshing) {
      getData();
      setRefreshing(false);
    }
  }, [refreshing]);

  useEffect(() => {
    getData();
  }, []);

  const renderFoodItems = ({item}) => {
    // console.log("props",props);
    return (
      <SalonCard
        id={item?._id}
        title={item?.title}
        description={item?.description}
        // image={generalImages.defaultImage}
        image={item?.image ? {uri: urls.imageUrl + item?.image} : generalImages.defaultImage}
        rating={item?.averageRating}
      />
    );
  };

  const renderHeader = (
    <View>
      <OutfitMedium style={styles.dietTextProducts}>
        Nearest Salons
      </OutfitMedium>
    </View>
  );

  // console.log("responseData",responseData);
  return (
    <ScreenWrapper style={styles.containerMain}>
      <FlatList
        data={responseData}
        renderItem={renderFoodItems}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={EmptyComponent}
        contentContainerStyle={styles.footer}
        refreshing={refreshing}
        onRefresh={handleOnRefresh}
        showsVerticalScrollIndicator={false}
        // ListFooterComponent={() => <View style={styles.footer} />}
      />
    </ScreenWrapper>
  );
};
export default SalonListScreen;
