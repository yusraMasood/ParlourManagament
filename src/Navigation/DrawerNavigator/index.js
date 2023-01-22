// import React, {useEffect} from 'react';
// import {View} from 'react-native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {vw} from '../../utils/dimensions';
// import {colors} from '../../utils/appTheme';
// import DrawerContent from '../../components/DrawerComponents/DrawerContent';
// import DrawerScreenWrapper from '../../components/DrawerComponents/DrawerScreenWrapper';
// import TabNavigator from '../TabNavigator';

// const Drawer = createDrawerNavigator();
// const HomeStack = props => {
//   return (
//     <DrawerScreenWrapper {...props}>
//       <TabNavigator />
//     </DrawerScreenWrapper>
//   );
// };

// const DrawerNavigator = props => {
//   return (
//     <View style={{flex: 1, backgroundColor: colors.drawerBlack}}>
//       <Drawer.Navigator
//         drawerContent={props => {
//           return <DrawerContent {...props} />;
//         }}
//         screenOptions={{
//           drawerType: 'slide',
//           headerShown: false,
//           drawerStyle: {
//             backgroundColor: 'transparent',
//             width: '52.5%',
//           },
//           overlayColor: 'transparent',
//           sceneContainerStyle: {
//             backgroundColor: 'transparent',
//           },
//         }}>
//         <Drawer.Screen name="HomeStack" component={HomeStack} />
//       </Drawer.Navigator>
//     </View>
//   );
// };

// export default DrawerNavigator;
