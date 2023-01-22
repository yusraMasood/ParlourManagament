import {StyleSheet} from 'react-native';
import {colors, themeShadow} from '../../utils/appTheme';
import {vh, vw} from '../../utils/dimensions';

const styles = StyleSheet.create({
  dropdownValues: {
    marginLeft: vw * 2,
    borderWidth: 1,
    borderColor: colors.greyBtnOrder,
    borderRadius: vw * 1,
    padding: vh * 1,
  },
  noOfTimes: {
    paddingBottom: vh * 1,
  },
  dropdownContainer: {},
  icon: {
    height: vh * 1.5,
    width: vh * 1.5,
    resizeMode: 'contain',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: colors.white,
    // borderRadius: vh * 3,
    paddingVertical: vh * 1,
    // paddingHorizontal: vw * 4,
    // width: vw * 35,
    marginVertical: vh * 2,
    // marginHorizontal: vw * 2,
    // ...themeShadow,
  },
  fromContainer: {
    width: vw * 60,
    marginVertical: vh * 1,
  },
  statusText: {
    color: colors.grayTextColor,
  },
});
export default styles;
