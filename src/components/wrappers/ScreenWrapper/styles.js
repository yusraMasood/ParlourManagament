import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    marginTop: vh * 4,
    height: vh * 10,
    width: vw * 50,
  },
  containerScreen: {
    flex: 1,
    // backgroundColor: "red",
    marginTop: vh * -6.8,
    // paddingTop: vh*3,
    // marginTop: Platform.OS === 'android' ? -vh * 8.5 : -vh * 8.5,
    backgroundColor: colors.white,
    borderTopLeftRadius: vh * 7.5,
  },
});
export default styles;
