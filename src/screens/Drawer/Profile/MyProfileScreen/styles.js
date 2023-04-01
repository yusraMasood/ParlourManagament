import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils/appTheme';
import {vh, vw} from '../../../../utils/dimensions';

const styles = StyleSheet.create({
  red: {
    backgroundColor: colors.white,
  },
  profileMainContainer: {
    flexDirection: 'row',
    // paddingTop: vh * 4,
    // backgroundColor: "red",
    width: vw * 70,
    justifyContent: 'space-between',
  },
  changePasswordContainer: {
    marginBottom: vh * 4,
  },
  passwordText: {
    color: colors.maroon,
    // backgroundColor: "red",
    textDecorationLine: 'underline',
    // borderBottomWidth:1,
    // borderBottomColor: colors.maroon,
    // marginBottom: vh*3,
  },
  linearInScreen: {
    // marginTop: vh * 7,
    // backgroundColor: "blue"
  },
  btnContainer: {
    marginTop: vh * 2,
  },
  imgContainer: {
    alignItems: 'center',
    marginTop: vh * 13,
    // backgroundColor: "green"

    // width: vw * 100,
  },
  rowContainer: {
    marginBottom: vh * 5,
  },
  userImage: {
    height: vh * 14,
    width: vh * 14,
    // resizeMode: 'contain',
    resizeMode: 'cover',
    backgroundColor: colors.greyBtnOrder,
    borderRadius: vh * 10,
    // marginTop: -vh*2
  },
  nameText: {
    fontSize: vh * 1.8,
    paddingTop: vh * 1,
  },
  headingText: {
    color: colors.blackappText,
    fontSize: vh * 1.9,
  },
  profileContainer: {
    paddingTop: vh * 11,
    alignItems: 'center',
    // backgroundColor: "blue"
    // paddingHorizontal: vw*7,
  },
  container: {
    // height: vh * 18,
    height: vh * 21,

    // alignItems: "flex-end",
    flexDirection: 'row',
    // marginBottom: vh * 2,
    borderBottomRightRadius: vh * 7,
    // backgroundColor: "red"
  },
  detailUserContainer: {
    width: vw * 50,
    // alignItems: "flex-end",
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
