import React, {useEffect, useState} from 'react';
import {Text, FlatList, View, LayoutAnimation} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './styles';
import RippleHOC from '../../../../components/wrappers/Ripple';
import OutfitBold from '../../../../components/Texts/OutfitBold';
import OutfitRegular from '../../../../components/Texts/OutfitRegular';
import OrderCard from '../../../../components/Cards/OrderCard';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import EmptyComponent from '../../../../components/EmptyComponent';
import useBooking from '../../../../Hooks/useBooking';

const Tab = createBottomTabNavigator();
const MyOrders = props => {
  const allOrders = [
    {
      status: 'pending',
      id: 1,
    },
    {
      status: 'delivered',
      id: 2,
    },
    {
      status: 'inprocess',
      id: 3,
    },
    {
      status: 'pending',
      id: 4,
    },
    {
      status: 'inprocess',
      id: 5,
    },
    {
      status: 'inprocess',
      id: 6,
    },
    {
      status: 'delivered',
      id: 7,
    },
    {
      status: 'delivered',
      id: 8,
    },
  ];

  const {getMyBooking} = useBooking();

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
        const response = await getMyBooking();
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
  return (
    <ScreenWrapper style={styles.container}>
      <FlatList
        data={responseData}
        ListEmptyComponent={EmptyComponent}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={handleOnRefresh}
        renderItem={({item}) => {
          return (
            <OrderCard
              item={item}
              bookingId={item?.booking_id}
              // price={}
              onPress={() =>
                props.navigation.navigate('OrderDetails', {
                  details: item,
                  status: item?.status,
                })
              }
            />
          );
        }}
      />
    </ScreenWrapper>
  );
};

export default MyOrders;
