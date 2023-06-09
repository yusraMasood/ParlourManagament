import React, {useState, useLayoutEffect, useEffect, useRef} from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import OutfitMedium from '../../../../components/Texts/OutfitMedium';
import styles from './styles';
import OutfitRegular from '../../../../components/Texts/OutfitRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import {icons} from '../../../../assets/images';
import RippleHOC from '../../../../components/wrappers/Ripple';
import FoodItems from '../../../../components/Cards/FoodItems';
import useBooking from '../../../../Hooks/useBooking';

const SalonListScreen = props => {
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
      // <RippleHOC onPress={() => props.navigation.navigate('ProductDetails')}>
      <FoodItems
        id={item?._id}
        title={item?.title}
        description={item?.description}
        // image={props?.item?.media[0]?.image_url}
      />
      // </RippleHOC>
    );
  };

  const renderHeader = (
    <View style={styles.dietContainer}>
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
