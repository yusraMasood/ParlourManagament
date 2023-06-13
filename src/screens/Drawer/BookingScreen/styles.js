import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-safearea-height';
import {vh, vw} from '../../../utils/dimensions';
import {colors} from '../../../utils/appTheme';

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(),
  },
  content: {
    paddingHorizontal: vw * 5,
    paddingBottom: vh * 5,
    // alignItems: 'center',
  },
  titleText: {
    // width: vw * 84,
    fontSize: vh * 2.3,
    color: colors.white,
    // marginBottom: vh * 2,
  },
  midHeadingText: {
    marginTop: vh * 5,
  },
  midInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ContentContainer: {
    alignItems: 'center',
    marginTop: vh * 5,
  },
  btnView: {
    height: vh * 5.8,
  },
});
export default styles;
