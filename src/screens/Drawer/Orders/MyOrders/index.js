import React, {useEffect} from 'react';
import {Text, FlatList, View, LayoutAnimation} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './styles';
import RippleHOC from '../../../../components/wrappers/Ripple';
import OutfitBold from '../../../../components/Texts/OutfitBold';
import OutfitRegular from '../../../../components/Texts/OutfitRegular';
import OrderCard from '../../../../components/Cards/OrderCard';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import EmptyComponent from '../../../../components/EmptyComponent';

const Tab = createBottomTabNavigator();
const MyOrders = props => {
  const allOrders=[{
    status:"pending",
    id:1,
  },
  {
    status:"delivered",
    id:2,
  },
  {
    status:"inprocess",
    id:3,
  },
  {
    status:"pending",
    id:4,
  },
  {
    status:"inprocess",
    id:5,
  },
  {
    status:"inprocess",
    id:6,
  },
  {
    status:"delivered",
    id:7,
  },
  {
    status:"delivered",
    id:8,
  },

]
  return (
    <ScreenWrapper style={styles.container}>
          <FlatList
            data={allOrders}
            ListEmptyComponent={EmptyComponent}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <OrderCard
                  item={item}
                  onPress={() =>
                    props.navigation.navigate('OrderDetails', {status: item?.status})
                  }
                />
              );
            }}
          />
    </ScreenWrapper>
  );
};

export default MyOrders;
