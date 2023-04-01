import {StyleSheet} from 'react-native';
import {colors, themeShadow} from '../../../../utils/appTheme';
import {vh, vw} from '../../../../utils/dimensions';

const styles = StyleSheet.create({
  red: {
    backgroundColor: colors.white,
  },
  radioButtonContainer: {
    height: vh * 10,
  },
  dobRequireContainer: {
    flexDirection: 'row',
    width: vw * 85,
  },
  dobText: {
    color: colors.blackappText,
    fontSize: vh * 2,
  },
  requireText: {
    color: colors.red,
    fontSize: vh * 2,
  },
  // require: {
  //   color: colors.red,
  // },
  // iconStyle:{
  //   height: vh*2,
  //   width: vh*2,
  //   resizeMode: "contain",
  //   paddingBottom: vh*0.25,
  // },
  labelContainer: {
    flexDirection: 'row',
  },
  rowContainerForDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.greyBtnOrder,
    // paddingTop: vh*0.2
  },
  label: {
    color: colors.blackappText,
    marginBottom: vh * 1,
    fontSize: vh * 1.9,
  },
  linearInScreen: {
    marginTop: vh * 7,
  },
  radioContainer: {height: vh * 3},
  container: {
    height: vh * 21,
    // alignItems: "flex-end",
    flexDirection: 'row',
    // marginBottom: vh * 2,
    borderBottomRightRadius: vh * 7,
    // backgroundColor: "red"
  },
  genderChooseText: {
    color: colors.blackappText,
    width: vw * 85,
    fontSize: vh * 1.9,
    marginTop: vh * 3,
  },
  cameraContainer: {
    backgroundColor: colors.white,
    padding: vh * 1.3,
    borderRadius: vh * 3,
    position: 'absolute',
    ...themeShadow,
    top: vh * 20,
    right: vw * 35,
  },
  cameraIcon: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
  },
  profileMainContainer: {
    flexDirection: 'row',
    paddingTop: vh * 4,
    width: vw * 70,
    justifyContent: 'space-between',
  },
  workoutContainer: {
    justifyContent: 'space-between',
    width: vw * 80,
    paddingTop: vh * 1.5,
    // backgroundColor: "red"
  },
  passwordText: {
    color: colors.maroon,
    textDecorationLine: 'underline',
  },
  btnContainer: {
    marginTop: vh * 2,
  },
  imgContainer: {
    alignItems: 'center',
    marginTop: vh * 12,
  },
  rowContainer: {
    marginBottom: vh * 5,
    width: vw * 82.5,
  },
  userImage: {
    height: vh * 14,
    width: vh * 14,
    resizeMode: 'cover',
    // backgroundColor: colors.greyBtnOrder,
    borderRadius: vh * 10,
  },
  nameText: {
    fontSize: vh * 1.8,
    paddingTop: vh * 1,
    paddingBottom: vh * 0.25,
  },
  headingText: {
    color: colors.blackappText,
    fontSize: vh * 1.9,
  },
  profileContainer: {
    paddingTop: vh * 11,
    alignItems: 'center',
  },
  detailUserContainer: {
    width: vw * 50,
    justifyContent: 'flex-end',
    paddingBottom: vh * 3,
    paddingHorizontal: vw * 4,
  },
  calistaText: {
    fontSize: vh * 2.1,
    color: colors.white,
  },
  workoutText: {
    fontSize: vh * 2.4,
    color: colors.white,
  },
  circleLeftcontainer: {
    width: vw * 50,
    alignItems: 'flex-end',
  },
  circleTop: {
    height: vh * 25,
    width: vw * 50,
    borderRadius: vh * 20,
    backgroundColor: colors.white,
    // backgroundColor: "red",
    opacity: 0.15,
    // alignItems: "flex-end",
    justifyContent: 'flex-end',
    marginTop: vh * -13,
    marginRight: vw * -20,
  },
  innerCircle: {
    height: vh * 25,
    width: vw * 50,
    backgroundColor: colors.white,
    opacity: 0.55,
    borderRadius: vh * 20,
    marginLeft: -vw * 12,
  },
});
export default styles;
