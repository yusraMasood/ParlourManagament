import {StyleSheet} from 'react-native';
import {fonts} from '../../../assets/fonts';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    paddingTop: vh * 2,
    // flexDirection: 'row',
    // marginVertical  : vh*2,
  },
  inputWithIcon: {
    // flexDirection: 'row',
    borderBottomWidth: 1,
    paddingTop: vh * 1,
    borderColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    width: vw * 85,
    // paddingBottom: vh * 1,
  },
  icon: {
    height: vh * 2.5,
    width: vh * 2.5,
    resizeMode: 'contain',
    // backgroundColor: 'red',
  },
  icon2: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
  },
  input: {
    // borderBottomWidth: 1,
    // borderColor: colors.borderColor2,
    // borderColor: colors.grey,
    // width: vw * 85,
    // width: vw * 78,
    flex: 1,
    fontFamily: fonts.Outfit.regular,
    padding: 0,
    // paddingBottom: vh * 1,
    color: colors.white,
    fontSize: vh * 1.9,
    // paddingBottom: vh * 0.5,
    // opacity: 0.1
  },
  labelContainer: {
    flexDirection: 'row',
  },
  label: {
    color: colors.white,
    marginBottom: vh * 1,
    fontSize: vh * 1.9,
  },
  require: {
    color: colors.red,
  },
});

export default styles;
