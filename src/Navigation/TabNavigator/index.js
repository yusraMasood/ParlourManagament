import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './styles';
import {vh, vw} from '../../utils/dimensions';
import {colors, linearColors} from '../../utils/appTheme';
import {tabIcons} from '../../assets/images';
import HomeNavigator from '../HomeNavigator';
import LinearGradient from 'react-native-linear-gradient';
import OutfitMedium from '../../components/Texts/OutfitMedium';
import MyOrders from '../../screens/Drawer/Orders/MyOrders';
import OrderNavigator from '../OrderNavigator';

const Tab = createBottomTabNavigator();

const icons = {
  CartNavigator: {icon: tabIcons.cart},
  TrainingNavigator: {icon: tabIcons.dumbbell},
  HomeNavigator: {icon: tabIcons.home},
  OrderNavigator: {icon: tabIcons.planning},
  MySessionNavigator: {icon: tabIcons.calendar},
};

const TabNavigator = props => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{swipeEnabled: false}}
      
      tabBar={tabProps => <MyTabBar {...tabProps} {...props} />}
      >
      <Tab.Screen name="HomeNavigator" component={HomeNavigator} options={{headerShown:false}}/>
      <Tab.Screen name="OrderNavigator" component={OrderNavigator} options={{headerShown:false}}/>

      {/* <Tab.Screen name="CartNavigator" component={CartNavigator} />
      <Tab.Screen name="MealNavigator" component={MealNavigator} />
      <Tab.Screen name="MySessionNavigator" component={MySessionNavigator} />
      <Tab.Screen name="TrainingNavigator" component={TrainingNavigator} /> */}
    </Tab.Navigator>
  );
};

const MyTabBar = ({state, navigation}) => {

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity key={index} onPress={onPress} style={styles.tabItem}>
            {route?.name == 'CartNavigator' && (
              <View>
                {cartProducts && cartProducts.length > 0 && (
                  <View style={styles.cartCount}>
                    <OutfitMedium style={styles.countText}>
                      {cartProducts.length}
                    </OutfitMedium>
                  </View>
                )}
              </View>
            )}
            <Image
              source={icons[route?.name]?.icon}
              style={{
                height: vh * 2.4,
                width: vh * 2.4,
                tintColor: isFocused ? colors.red : colors.tabIconColor,
              }}
              resizeMode="contain"
            />
            <View style={{backgroundColor: 'red'}}>
              <OutfitMedium
                style={[styles.screenName, isFocused && styles.screenFocus]}>
                {icons[route?.name]?.name}
              </OutfitMedium>
            </View>
            {isFocused && (
              <LinearGradient
                colors={linearColors.defaultRed}
                style={styles.dotStyle}></LinearGradient>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabNavigator;
