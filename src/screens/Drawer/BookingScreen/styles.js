import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-safearea-height';
import {vh, vw} from '../../../utils/dimensions';
import {colors} from '../../../utils/appTheme';

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(),
  },
  content: {
    alignItems: 'center',
  },
  titleText: {
    width: vw * 84,
    fontSize: vh * 2.3,
    color: colors.white,
    marginBottom: vh*2,
  },
  midHeadingText: {
    marginTop: vh*5
  },
  midInputContainer:{
    flexDirection: 'row',
    paddingHorizontal: vw*5
  }
});
export default styles;
