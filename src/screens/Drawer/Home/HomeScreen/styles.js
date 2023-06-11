import {StyleSheet} from 'react-native';
import {colors, themeShadow} from '../../../../utils/appTheme';
import {vh, vw} from '../../../../utils/dimensions';
import {getStatusBarHeight} from 'react-native-safearea-height';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: colors.white,
  },
  containerMain: {
    paddingTop: vh,
  },
  footer: {
    paddingBottom: vh * 10,
    paddingHorizontal: vw * 3,
  },
  dietContainer: {
    // paddingLeft: vw * 3,
  },
  nameText: {
    color: colors.white,
    fontSize: vh * 2.8,
  },
  dietTextProducts: {
    color: colors.white,
    fontSize: vh * 2,
    marginTop: vh * 3,
  },
  servicesCard: {
    paddingHorizontal: vw * 3,
    paddingVertical: vh * 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginRight: vw * 2,
    borderRadius: vw * 1,
  },
  serviceNameText: {color: colors.white, fontSize: vh * 1.6},
});
export default styles;
