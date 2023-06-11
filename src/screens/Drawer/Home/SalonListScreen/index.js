import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import OutfitMedium from '../../../../components/Texts/OutfitMedium';
import styles from './styles';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import {generalImages} from '../../../../assets/images';
import useBooking from '../../../../Hooks/useBooking';
import SalonCard from '../../../../components/Cards/SalonCard';

const SalonListScreen = props => {
  const serviceId = props?.route?.params?.serviceId;

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
        // const data = {
        //   page: currentPage,
        //   per_page: 10,
        //   service: serviceId,
        // };
        const response = await getNearestSalons();
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
        image={generalImages.defaultImage}
        // image={item?.image ? item?.image : generalImages.noImage}
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

  return (
    <ScreenWrapper style={styles.containerMain}>
      <FlatList
        data={responseData}
        renderItem={renderFoodItems}
        ListHeaderComponent={renderHeader}
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
