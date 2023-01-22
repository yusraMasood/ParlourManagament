import {StyleSheet} from 'react-native';
import {colors, themeShadow} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    height: vh * 10.4,
    width: vw * 90,
    backgroundColor: colors.white,
    ...themeShadow,
    marginBottom: vh * 2,
    borderRadius: vw * 2,
    flexDirection: 'row',
    alignItems: 'center',
    // alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: vw * 1.5,
  },
  quantityText: {
    color: colors.blackappText,
    paddingRight: vw * 3,
  },
  dollarText: {
    fontSize: vh * 1.05,
    color: colors.blackappText,
  },
  priceContainer: {
    flexDirection: 'row',
  },
  countText: {
    marginRight: vw * 2,
    marginLeft: vw * 2,
    // marginHorizontal: vw*2
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: colors.blue,
    height: vh * 9,
    width: vh * 9,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vw * 2,
  },
  image: {
    height: vh * 8,
    width: vh * 9,
    borderRadius: vw * 2,
    marginLeft: vw * 0.5,
    marginTop: vh * 0.5,
    resizeMode: 'cover',
  },
  textContainer: {
    marginLeft: vw * 3,
  },
  headingText: {
    color: colors.blackappText,
    fontSize: vh * 2,
  },
  colorText: {
    color: colors.colorText,
    fontSize: vh * 1.6,
    width: vw * 37,
    // color: colors.black,
  },
  priceText: {
    // color: colors.red,
    fontSize: vh * 1.8,
    color: colors.blackappText,
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: vw * 19,
    paddingBottom: vh * 2,
    paddingRight: vw * 2,
  },
  cartOuterContainer: {
    // alignItems: "flex-end",
    justifyContent: 'flex-end',
  },
  countCartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  plusContainer: {
    height: vh * 3,
    width: vw * 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vw * 8,
    // marginLeft: vw*2
    // backgroundColor: colors.offWhiteCircle
  },
  plusIcon: {
    height: vh * 1.5,
    width: vh * 1.5,
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  minusIcon: {
    height: vh * 1.3,
    width: vh * 1.3,
    resizeMode: 'contain',
  },
});
export default styles;
