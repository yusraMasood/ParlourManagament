import React, {useState, useEffect} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import OutfitMedium from '../../../../components/Texts/OutfitMedium';
import styles from './styles';
import OutfitRegular from '../../../../components/Texts/OutfitRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import {generalImages} from '../../../../assets/images';
import useBooking from '../../../../Hooks/useBooking';
import useProfile from '../../../../Hooks/useProfile';
import OutfitSemiBold from '../../../../components/Texts/OutfitSemiBold';
import {vh} from '../../../../utils/dimensions';
import SalonCard from '../../../../components/Cards/SalonCard';
import { urls } from '../../../../Api/configs';

const HomeScreen = props => {
  const {getNearestSalons, getServices} = useBooking();
  const {profile} = useProfile();

  // console.log('profile', profile);

  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [services, setServices] = useState([]);

  const handleSalonList = () => {
    props.navigation?.navigate('SalonListScreen');
  };

  const handleServicePress = item => {
    props.navigation?.navigate('SalonListScreen', {
      serviceId: item?.id,
    });
  };

  const getSalonServices = () => {
    getServices().then(res => {
      console.log('res', res);
      setServices(res?.detail);
    });
  };

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
    getSalonServices();
  }, []);

  const renderFoodItems = ({item}) => {
    // console.log("props",props);
    return (
      <SalonCard
        id={item?._id}
        title={item?.title}
        description={item?.description}
        // image={generalImages.defaultImage}
        image={item?.image ? {uri: urls?.imageUrl + item?.image} : generalImages.defaultImage}
        rating={item?.averageRating}
      />
    );
  };

  const renderServices = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.servicesCard}
        activeOpacity={0.99}
        onPress={() => handleServicePress(item)}>
        <OutfitRegular style={styles.serviceNameText}>
          {item?.serviceName}
        </OutfitRegular>
      </TouchableOpacity>
    );
  };

  const renderHeader = (
    <View style={styles.dietContainer}>
      <OutfitSemiBold style={styles.nameText}>
        Hello {profile?.name},
      </OutfitSemiBold>
      <OutfitMedium style={styles.dietTextProducts}>Top Services</OutfitMedium>
      <FlatList
        data={services}
        renderItem={renderServices}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{marginTop: vh * 1}}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: vh * 3,
        }}>
        <OutfitMedium style={[styles.dietTextProducts, {marginTop: 0}]}>
          Top Nearby Salons
        </OutfitMedium>
        <TouchableOpacity
          onPress={handleSalonList}
          activeOpacity={0.99}
          style={styles.serviceBtnContainer}>
          <OutfitRegular style={styles.textBtnStyle}>View All</OutfitRegular>
        </TouchableOpacity>
      </View>
    </View>
  );

  // console.log('profile', services);

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
export default HomeScreen;
