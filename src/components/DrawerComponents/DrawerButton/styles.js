import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3 * vh,
  },
  icon: {
    tintColor: colors.iconColor,
    height: 1.5 * vh,
    width: 1.5 * vh,
    resizeMode: 'contain',
    marginHorizontal: 5 * vw,
  },
  drawerButtonContainer: {
    // backgroundColor: colors.red,
    alignItems: 'center',
  },
  text: {
    width: vw * 35,
    paddingVertical: vh * 1.1,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGray,
    padding: vh * 1.4,
    borderRadius: (vh * 5) / 2,
    // height: vh * 5,
    width: vh * 5,
  },
  label: {
    fontSize: 1.8 * vh,
    color: colors.drawerText,
    // textAlign:"left"
    // marginLeft: vw * 3,
  },
});

export default styles;
