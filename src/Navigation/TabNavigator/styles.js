import {StyleSheet} from 'react-native';
import {colors, themeShadow} from '../../utils/appTheme';
import {vh, vw} from '../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    width: vw * 100,
    height: vh * 8,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // borderTopLeftRadius: vh * 3,
    // borderTopRightRadius: vh * 3,
    backgroundColor: colors.black,
    ...themeShadow,
  },
  screenFocus: {
    color: colors.defaultRed,
  },
  screenName: {
    // backgroundColor: 'red',
    color: colors.blackappText,
    // color: 'black',
    fontSize: vh * 1.4,
    marginTop: vh * 0.5,
    // backgroundColor: 'red',
  },

  countText: {
    fontSize: vh * 1,
    color: colors.white,
  },
  cartCount: {
    position: 'absolute',
    zIndex: 999,
    top: -vh * 1,
    left: vw * 2,
    borderWidth: 1,
    borderColor: colors.white,
    height: vh * 2.1,
    width: vh * 2.1,
    backgroundColor: colors.defaultThemeRed,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh * 2,
  },
  textStyle: {
    color: colors.tabIconColor,
    fontSize: vh * 1.2,
    marginLeft: vw * 1,
  },
  dotStyle: {
    position: 'absolute',
    height: vh * 1.5,
    width: vw * 3,
    backgroundColor: 'red',
    borderRadius: vh * 1.5,
    // marginTop: vh * 4.5,
    bottom: -vh * 2,
    // marginBottom: vh*2,
  },
  tabItem: {
    alignItems: 'center',
  },
});

export default styles;

