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

const MapScreen = props => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [responseData, setResponseData] = useState(null);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setRefreshing(false);
  }, []);

  const renderFoodItems = props => {
    // console.log("props",props);
    return (
      // <RippleHOC onPress={() => props.navigation.navigate('ProductDetails')}>
      <FoodItems
        id={props?.item?.id}
        title={props?.item?.title}
        price={props?.item?.prices}
        // image={props?.item?.media[0]?.image_url}
      />
      // </RippleHOC>
    );
  };
  
  return (
    

    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={[styles.mainContainer]}>
      <ScreenWrapper
        style={styles.containerMain}
      >

        <View style={styles.dietContainer}>
          <OutfitMedium style={styles.dietTextProducts}>
           Nearest Salons
          </OutfitMedium>
        </View>
        <FlatList
          data={[1,2,3,4]}
          renderItem={renderFoodItems}
          contentContainerStyle={styles.footer}
          // ListFooterComponent={() => <View style={styles.footer} />}
        />

      </ScreenWrapper>
    </ScrollView>
  );
};
export default MapScreen;
