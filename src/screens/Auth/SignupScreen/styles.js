import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  calendar:{
    marginTop: vh*2,
    marginBottom: vh*1,
  },
  logo: {
    marginTop: vh * 10,
    height: vh * 16,
    width: vh * 16,
    resizeMode: 'contain',
  },
  facebookBtn: {
    marginTop: 0,
  },
  dontAccountText: {
    color: colors.blackappText,
    textDecorationLine: 'underline',
  },
  signupText: {
    color: colors.defaultThemeRed,
    textDecorationLine: 'underline',
  },
  signupAccount: {
    // height: vh*20,
    // alignItems: "flex-end",
    flexDirection: 'row',
    // marginTop: vh * 17,
    marginBottom: vh * 3,
    // position: "absolute",
    // bottom: vh*3
    // flex:1
  },
  content: {
    alignItems: 'center',
  },
  flatlistContainer: {
    justifyContent: 'space-between',
  },

  rippleContainer: {
    // height: vh*2.5,
    // width: vw*5,
    // borderRadius: vh*3,
  },
  orText: {
    color: colors.blackappText,
  },
  input: {marginBottom: vh * 5},
  contentGenderContainer: {
    width: vw * 88,
    // justifyContent: "space-between"
  },
  roundNumberText: {
    paddingLeft: vw * 2,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signupBtn: {
    borderColor: colors.black,
    borderWidth: 1.5,
    backgroundColor: colors.white,
    borderRadius: vh * 2,
  },
  btnText: {
    color: colors.black,
  },
  roundContainerView: {
    marginTop: vh * 2,
    // backgroundColor: "red",
  },
  roundContainer: {
    borderColor: colors.grey,
    borderWidth: vh * 0.2,
    height: vh * 2.5,
    width: vw * 5,
    borderRadius: vh * 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: vw * 3,
    // marginBottom: vh*2
  },
  roundInnerFocus: {
    backgroundColor: colors.grey,
    height: vh * 1.7,
    width: vw * 3.4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh * 2,
  },
  roundInner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundFocus: {
    // backgroundColor: colors.textBlue,
    color: colors.white,
    // borderRadius: 2,
  },
  roundBorder: {
    borderColor: colors.grey,
  },
  btnContainer: {
    marginBottom: vh * 3,
    marginTop: 0,
  },
  titleText: {
    marginTop: vh * 2,
    marginBottom: vh * 5,
    fontSize: vh * 2.3,
    color: colors.white,
  },
  label: {
    color: colors.white,
    width: vw * 85,
    marginTop: vh * 2.5,
    marginBottom: vh * 1.5,
  },
});
export default styles;