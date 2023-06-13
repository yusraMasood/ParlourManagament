import {StyleSheet} from 'react-native';
import {colors, themeShadow} from '../../../../utils/appTheme';
import {vh, vw} from '../../../../utils/dimensions';
import {getStatusBarHeight} from 'react-native-safearea-height';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  containerMain: {
    paddingTop: getStatusBarHeight(),
  },
  footer: {
    paddingBottom: vh * 10,
    paddingHorizontal: vw * 3,
  },

  dietTextProducts: {
    color: colors.radioGrey,
    fontSize: vh * 1.8,
  },
});
export default styles;
