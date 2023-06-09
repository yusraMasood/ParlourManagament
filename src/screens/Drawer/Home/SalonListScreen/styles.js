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
  },

  dietTextProducts: {
    color: colors.white,
    paddingLeft: vw * 6,

    fontSize: vh * 2,
  },
});
export default styles;
