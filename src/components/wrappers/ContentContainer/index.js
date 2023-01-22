import React from 'react';
import {StyleSheet, ScrollView, RefreshControl} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {colors} from '../../../utils/appTheme';
import {vh} from '../../../utils/dimensions';
// import HeaderCurveBorder from '../HeaderCurveBorder';

const ContentContainer = props => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // wait(2000).then(() => setRefreshing(false));
    if (props?.func) {
      props?.func();
    }
    setRefreshing(false);
  }, []);
  var Scroll = ScrollView;
  if (props.aware) {
    Scroll = KeyboardAwareScrollView;
  }
  return (
    <Scroll
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      bounces={false}
      {...props}
      // contentContainerStyle={[{flexGrow: 1}, props.contentContainerStyle]}
      style={[styles.container, props.style]}>
      {/* {props.showCurve != false && <HeaderCurveBorder />} */}
      {props.children}
    </Scroll>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: vh*100
    backgroundColor: colors.white,
  },
});
export default ContentContainer;
