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



  const OrderTab = props => {
    return (
      <View style={styles.tabOuterContainer}>
        <View style={styles.tabContainer}>
          {props.state.routes.map((route, index) => {
            const {options} = props?.descriptors[route.key];
            const isFocused = props.state.index === index;
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
            return (
              <RippleHOC
                onPress={() => {
                  // LayoutAnimation.configureNext(LayoutAnimation.Presets.linear),
                  props.navigation.navigate({name: route.name, merge: true});
                }}
                style={
                  isFocused ? styles.focussedBtnContainer : styles.btnContainer
                }>
                {/* {isFocused ? (
                  <OutfitBold style={styles.focussedBtnText}>
                    {label}
                  </OutfitBold>
                ) : (
                  <OutfitRegular style={styles.btnText}>{label}</OutfitRegular>
                )} */}
              </RippleHOC>
            );
          })}
        </View>
        {/* <View style={styles.borderStyle} /> */}
      </View>
    );
  };
  const AllOrders = props => {
    return (
      <View style={styles.container}>
        <View>
          <FlatList
            data={[1,2,3,4]}
            ListEmptyComponent={EmptyComponent}
            // contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <OrderCard
                  item={item}
                  onPress={() =>
                    props.navigation.navigate('OrderDetails', {id: item?.id})
                  }
                />
              );
            }}
          />
        </View>
      </View>
    );
  };
  const PendingOrders = props => {
    // const pendingOrders = useSelector(state=> state?.order?.data?.res)
    // console.log("pending",pendingOrders);

    return (
      <View style={styles.container}>
        <View>
          <FlatList
            data={[1,2,3,4]}
            ListEmptyComponent={EmptyComponent}
            // contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              // console.log("item?.status",item?.status);
              return (
                <OrderCard
                  item={item}
                  onPress={() =>
                    props.navigation.navigate('OrderDetails', {id: item?.id})
                  }
                />
              );
            }}
          />
        </View>
      </View>
    );
  };
  const CompletedOrders = props => {

    return (
      <View style={styles.container}>
        <View>
          <FlatList
            data={[1,2,3]}
            ListEmptyComponent={EmptyComponent}
            // contentContainerStyle={styles.contentContainer}

            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <OrderCard
                  item={item}
                  onPress={() =>
                    props.navigation.navigate('OrderDetails', {id: item?.id})
                  }
                />
              );
            }}
          />
        </View>
      </View>
    );
  };
  const InProcessOrders = props => {

    return (
      <View style={styles.container}>
        <View>
          <FlatList
            data={[1,2,3,4]}
            ListEmptyComponent={EmptyComponent}
            // contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <OrderCard
                  item={item}
                  onPress={() =>
                    props.navigation.navigate('OrderDetails', {id: item?.id})
                  }
                />
              );
            }}
          />
        </View>
      </View>
    );
  };
  // const MyTabs = props => {
  //   return (
  //     <Tab.Navigator
  //       initialRouteName="InProcessOrders"
  //       // tabBar={tabProps => <OrderTab {...tabProps} {...props} />}
  //       >
  //       <Tab.Screen name="All" component={AllOrders} />
  //       <Tab.Screen name="Pending" component={PendingOrders} />
  //       <Tab.Screen name="In-Process" component={InProcessOrders} />
  //       <Tab.Screen name="Completed" component={CompletedOrders} />
  //     </Tab.Navigator>
  //   );
  // };

  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.topTabContainer}>

        
      </View>
    </ScreenWrapper>
  );
};

export default MyOrders;

// import { Text, FlatList, View, LayoutAnimation } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/material-top-tabs';
// import styles from './styles';
// import RippleHOC from '../../../../components/wrappers/Ripple';
// import OutfitBold from '../../../../components/Texts/OutfitBold';
// import OutfitRegular from '../../../../components/Texts/OutfitRegular';
// import OrderCard from '../../../../components/Cards/OrderCard';
// import { useSelector } from 'react-redux';
// import { statuses } from '../../../../utils/data';
// import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
// import { useDispatch } from 'react-redux';
// import { getAllOrders } from '../../../../StateManagement/OrderSlice';
// import PagerView from 'react-native-pager-view';
// import { colors } from '../../../../utils/appTheme';

// const Tab = createMaterialTopTabNavigator();

// const MyOrders = props => {
//   // const responseData = useSelector(state => state?.order?.data?.res);
//   const dispatch = useDispatch();
//   const [choose, setChoose] = useState();
//   // console.log('choose ', choose);
//   const [responseData, setResponseData] = useState([1, 2, 3, 4, 5, 6, 7])
//   const pendingOrders = responseData?.filter(item => item.status == 'pending');
//   const inProcessOrders = responseData?.filter(item => item.status == 'in-process');
//   const completedOrders = responseData?.filter(item => item.status == 'completed');
//   const dataIsEmpty = !responseData?.length
//   const [pageIndex, setPageIndex] = useState(0);
//   // console.log("page index", pageIndex);
//   // useEffect(() => {
//   //   dispatch(getAllOrders()).then(res=>{
//   //     console.log("res?.payload",res?.payload);
//   //     setResponseData(res?.payload?.res)

//   //   });
//   // }, []);
//   const renderAllOrders = ({ item }) => {
//     return (
//       <OrderCard
//         status={item}
//         onPress={() =>
//           props.navigation.navigate('OrderDetails', { status: item })
//         }
//       />
//     );
//   };

//   // console.log("responseData", responseData);
//   // const OrderTab = props => {
//   //   return (
//   //     <View style={styles.tabOuterContainer}>
//   //       <View style={styles.tabContainer}>
//   //         {props.state.routes.map((route, index) => {
//   //           const {options} = props?.descriptors[route.key];
//   //           const isFocused = props.state.index === index;
//   //           const label =
//   //             options.tabBarLabel !== undefined
//   //               ? options.tabBarLabel
//   //               : options.title !== undefined
//   //               ? options.title
//   //               : route.name;
//   //           return (
//   //             <RippleHOC
//   //               onPress={() => {
//   //                 // LayoutAnimation.configureNext(LayoutAnimation.Presets.linear),
//   //                 props.navigation.navigate({name: route.name, merge: true});
//   //               }}
//   //               style={
//   //                 isFocused ? styles.focussedBtnContainer : styles.btnContainer
//   //               }>
//   //               {isFocused ? (
//   //                 <OutfitBold style={styles.focussedBtnText}>{label}</OutfitBold>
//   //               ) : (
//   //                 <OutfitRegular style={styles.btnText}>{label}</OutfitRegular>
//   //               )}
//   //             </RippleHOC>
//   //           );
//   //         })}
//   //       </View>
//   //       {/* <View style={styles.borderStyle} /> */}
//   //     </View>
//   //   );
//   // };

//   // const MyTabs = props => {
//   //   return (
//   //     <Tab.Navigator
//   //       initialRouteName="InProcessOrders"
//   //       tabBar={tabProps => <OrderTab {...tabProps} {...props} />}>
//   //       <Tab.Screen name="All" component={AllOrders} />
//   //       <Tab.Screen name="Pending" component={PendingOrders} />
//   //       <Tab.Screen name="In-Process" component={InProcessOrders} />
//   //       <Tab.Screen name="Completed" component={CompletedOrders} />
//   //     </Tab.Navigator>
//   //   );
//   // };
//   // const AllOrders = props => {
//   //   return (
//   //     <View style={styles.container}>
//   //       <View>
//   //         <FlatList
//   //           data={orders}
//   //           contentContainerStyle={styles.contentContainer}
//   //           showsVerticalScrollIndicator={false}
//   //           renderItem={({item}) => {
//   //             return (
//   //               <OrderCard
//   //                 status={item}
//   //                 onPress={() =>
//   //                   props.navigation.navigate('OrderDetails', {status: item})
//   //                 }
//   //               />
//   //             );
//   //           }}
//   //         />
//   //       </View>
//   //     </View>
//   //   );
//   // };
//   // const PendingOrders = props => {
//   //   return (
//   //     <View style={styles.container}>
//   //       <View>
//   //         <FlatList
//   //           data={pendingOrders}
//   //           contentContainerStyle={styles.contentContainer}
//   //           showsVerticalScrollIndicator={false}
//   //           renderItem={({item}) => {
//   //             return (
//   //               <OrderCard
//   //                 status={"Pending"}
//   //                 onPress={() =>
//   //                   props.navigation.navigate('OrderDetails', {status: "Pending"})
//   //                 }
//   //               />
//   //             );
//   //           }}
//   //         />
//   //       </View>
//   //     </View>
//   //   );
//   // };
//   // const CompletedOrders = props => {
//   //   return (
//   //     <View style={styles.container}>
//   //       <View>
//   //         <FlatList
//   //           data={completedOrders}
//   //           contentContainerStyle={styles.contentContainer}
//   //           showsVerticalScrollIndicator={false}
//   //           renderItem={({item}) => {
//   //             return (
//   //               <OrderCard
//   //                 status={"Completed"}
//   //                 onPress={() =>
//   //                   props.navigation.navigate('OrderDetails', {status: "Completed"})
//   //                 }
//   //               />
//   //             );
//   //           }}
//   //         />
//   //       </View>
//   //     </View>
//   //   );
//   // };
//   // const InProcessOrders = props => {
//   //   return (
//   //     <View style={styles.container}>
//   //       <View>
//   //         <FlatList
//   //           data={inProcessOrders}
//   //           contentContainerStyle={styles.contentContainer}
//   //           showsVerticalScrollIndicator={false}
//   //           renderItem={({item}) => {
//   //             return (
//   //               <OrderCard
//   //                 status={"In-Process"}
//   //                 onPress={() =>
//   //                   props.navigation.navigate('OrderDetails', {status: "In-Process"})
//   //                 }
//   //               />
//   //             );
//   //           }}
//   //         />
//   //       </View>
//   //     </View>
//   //   );
//   // };
//   return (
//     <ScreenWrapper style={styles.container}>
//       {/* <View style={{height:100,backgroundColor: "blue"}} /> */}
//       {/* <View style={{height:20,backgroundColor: colors.defaultRed}}/> */}
//       <View style={styles.logContainer}>
//         <RippleHOC
//           style={[
//             styles.btnContainer,
//             pageIndex == 0 && styles.focussedBtnContainer,
//           ]}
//           onPress={() => {
//             choose?.setPage(0);
//             setPageIndex(0);
//           }}>
//           <OutfitBold
//             style={[styles.btnText, pageIndex == 0 && styles.focussedBtnText]}>
//             All
//           </OutfitBold>
//         </RippleHOC>
//         <RippleHOC
//           style={[
//             styles.btnContainer,
//             pageIndex == 1 && styles.focussedBtnContainer,
//           ]}
//           onPress={() => {
//             choose?.setPage(1);
//             setPageIndex(1);
//           }}>
//           <OutfitBold
//             style={[styles.btnText, pageIndex == 1 && styles.focussedBtnText]}>
//             Pending
//           </OutfitBold>
//         </RippleHOC>
//         <RippleHOC
//           style={[
//             styles.btnContainer,
//             pageIndex == 2 && styles.focussedBtnContainer,
//           ]}
//           onPress={() => {
//             choose?.setPage(2);
//             setPageIndex(2);
//           }}>
//           <OutfitBold
//             style={[styles.btnText, pageIndex == 2 && styles.focussedBtnText]}>
//             Accepted
//           </OutfitBold>
//         </RippleHOC>
//         <RippleHOC
//           style={[
//             styles.btnContainer,
//             pageIndex == 3 && styles.focussedBtnContainer,
//           ]}
//           onPress={() => {
//             choose?.setPage(3);
//             setPageIndex(3);
//           }}>
//           <OutfitBold
//             style={[styles.btnText, pageIndex == 3 && styles.focussedBtnText]}>
//             On-going
//           </OutfitBold>
//         </RippleHOC>
//       </View>
//       {/* <OrderCard/> */}
//       <View style={{ height: 20, backgroundColor: colors.yellow }} />
//       <PagerView
//         ref={viewpager => {
//           viewpager = setChoose(viewpager);
//         }}
//         key={String(dataIsEmpty)}
//         // styl={{ height: 100, backgroundColor: "red" }}
//         style={styles.pagerView}
//         initialPage={0}>
//         <View key="0" >

//           <FlatList
//             data={[1, 2, 3, 4]}
//             contentContainerStyle={styles.contentContainer}
//             showsVerticalScrollIndicator={false}
//             renderItem={() => (
//               <View>
//                 {/* {console.log("sdjhojod")} */}

//                 <OrderCard
//                 // status={item}
//                 // onPress={() =>
//                 //   props.navigation.navigate('OrderDetails', {status: item})
//                 // }
//                 />
//               </View>
//             )}
//           // renderItem={renderAllOrders}
//           />
//         </View>
//         <View key="1" >
//           <FlatList
//             data={responseData}
//             contentContainerStyle={styles.contentContainer}
//             showsVerticalScrollIndicator={false}
//             renderItem={({ item }) => {
//               return (
//                 <OrderCard
//                   status={'In-Process'}
//                   onPress={() =>
//                     props.navigation.navigate('OrderDetails', {
//                       status: 'In-Process',
//                     })
//                   }
//                 />
//               );
//             }}
//             ListFooterComponent={() => <View style={styles.footer} />}
//           />
//         </View>
//         <View key="2" >
//           <FlatList
//             data={inProcessOrders}
//             contentContainerStyle={styles.contentContainer}
//             showsVerticalScrollIndicator={false}
//             renderItem={({ item }) => {
//               return (
//                 <OrderCard
//                   status={'In-Process'}
//                   onPress={() =>
//                     props.navigation.navigate('OrderDetails', {
//                       status: 'In-Process',
//                     })
//                   }
//                 />
//               );
//             }}
//             ListFooterComponent={() => <View style={styles.footer} />}
//           />
//         </View>
//         <View key="3" >
//           <FlatList
//             data={inProcessOrders}
//             contentContainerStyle={styles.contentContainer}
//             showsVerticalScrollIndicator={false}
//             renderItem={({ item }) => {
//               return (
//                 <OrderCard
//                   status={'In-Process'}
//                   onPress={() =>
//                     props.navigation.navigate('OrderDetails', {
//                       status: 'In-Process',
//                     })
//                   }
//                 />
//               );
//             }}
//             ListFooterComponent={() => <View style={styles.footer} />}
//           />
//         </View>
//       </PagerView>

//       {/* <View style={styles.topTabContainer}>{MyTabs()}</View> */}
//     </ScreenWrapper>
//   );
// };

// export default MyOrders;
