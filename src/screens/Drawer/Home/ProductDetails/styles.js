import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import {colors} from '../../../../utils/appTheme';
import {vh, vw} from '../../../../utils/dimensions';

const styles = StyleSheet.create({
  foodImage: {
    height: vh * 25,
    marginTop: vh * 2,
    resizeMode: 'cover',
    width: vw * 90,
    alignItems: 'flex-end',
    marginRight: vw * 3,
    paddingTop: vh * 0.5,
  },
  container: {
    paddingTop: vh * 4,
  },
  productImages: {
    flex: 1,
    flexGrow: 0,
  },
  freeColor: {backgroundColor: colors.SpiritstoneRed},
  premiumColor: {backgroundColor: colors.yellow},
  freeBtn: {
    // paddingVertical: vh*1,
    // height: vh*3,
    // width: vw*16,
    paddingHorizontal: vw * 2,
    paddingVertical: vh * 0.6,
    borderRadius: vw * 2,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: vw*2,
    // backgroundColor: colors.black
  },
  tagText: {
    color: colors.white,
    fontSize: vh * 1.55,
  },
  containerMain: {},
  scroll: {
    paddingBottom: vw * 8,
    paddingHorizontal: vw * 3,
  },
  imgBorder: {
    borderRadius: vh * 4,
  },
  countText: {
    fontSize: vh * 2.2,
  },
  dietBorder: {
    borderRadius: vh * 3,
  },
  dietImages: {
    height: vh * 18,
    paddingHorizontal: vw * 2,
    alignItems: 'flex-start',
    paddingTop: vh * 1,
    marginTop: vh * 2,
    width: vw * 60,
    marginLeft: vw * 3,
    marginRight: vw * 1,
    resizeMode: 'cover',
    marginLeft: vw * 3,
  },
  buttonStyle: {
    borderWidth: 1.3,
    borderColor: colors.borderBtn,
    width: vw * 45,
    borderRadius: vh * 1.5,
  },
  btnView: {
    height: vh * 5.8,
  },
  btnText: {
    color: colors.borderBtn,
    // paddingVertical: vh*1,
    fontSize: vh * 2,
  },
  ContentContainer: {
    alignItems: 'center',
    marginTop: vh * 3,
  },
  countCartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: vw * 95,
    marginHorizontal: vw * 3,
  },
  paraText: {
    fontSize: vh * 1.7,
    marginTop: vh * 1,
    color: colors.white,
  },
  circleOuterContainer: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: vh * 4,
    height: vh * 7,
    width: vw * 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  veganHeadText: {
    color: colors.white,
    fontSize: vh * 2.1,
  },
  circleInnerContainer: {
    backgroundColor: colors.white,
    borderRadius: vh * 4,
    height: vh * 6,
    width: vw * 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewTextStyle: {
    color: colors.white,
    fontSize: vh * 2.3,
    marginTop: vh * 3,
  },
  headerContainer: {
    marginTop: vh * 2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  serviceBtnContainer: {marginRight: vw * 2},
  textBtnStyle: {
    color: colors.white,
    fontSize: vh * 1.5,
    textDecorationLine: 'underline',
  },
});
export default styles;
