import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    paddingTop: vh * 23,
    alignItems: 'center',
  },
  content:{
    alignItems: "center"
  },
  enterEmailText: {
    marginBottom: vh * 5,
    marginTop: vh * 1,
    color: colors.blackappText,
  },
  logo: {
    height: vh * 16,
    width: vh * 16,
    resizeMode: 'contain',
  },
  input: {
    // marginTop: vh*6
    marginBottom: vh * 6,
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
  forgotContainer: {
    alignItems: 'flex-end',
    width: vw * 85,
    marginTop: vh * 1,
    marginBottom: vh * 5,
  },
  forgotPassword: {
    color: colors.black,
    textDecorationLine: 'underline',
    fontSize: vh * 1.65,
  },
  signupAccount: {
    marginTop: vh * 20,
    // justifyContent: 'flex-end',
    // paddingBottom: vh * 3,
    marginBottom: vh*2,
  },
  // alignButton:{
  //   flex:1,
  //   justifyContent: "flex-end",
  //   // backgroundColor: "red"
  // },
  dontAccountText: {
    color: colors.blackappText,
    textDecorationLine: 'underline',
  },
  signupText: {
    color: colors.defaultThemeRed,
    textDecorationLine: 'underline',
  },
  titleText: {
    marginTop: vh * 2,
    // marginBottom: vh*5,
    fontSize: vh * 2.3,
    color: colors.blackappText,
  },
});
export default styles;