import {StyleSheet} from 'react-native';
import {colors} from '../../utils/appTheme';
import {vh, vw} from '../../utils/dimensions';

const styles = StyleSheet.create({
  headerBackground: {
    height: vh * 15,
    width: vw * 100,
    resizeMode: 'cover',
  },
  red: {
    backgroundColor: colors.white,
  },
  titleText: {
    color: colors.white,
    fontSize: vh * 2.1,
  },
  bellIcon: {
    height: vh * 3,
    width: vh * 3,
    resizeMode: 'contain',
    marginTop: vh * -1.2,
    // backgroundColor: "red"
  },
  circleLeftcontainer: {
    width: vw * 50,
    alignItems: 'flex-end',
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
  circle: {
    height: vh * 1.6,
    width: vh * 1.6,
    resizeMode: 'contain',
    zIndex: 999,
    // position: "absolute",
    // top: vh*-0.8,
  },
  menuIcon: {
    height: vh * 2.5,
    width: vh * 2.5,
    resizeMode: 'contain',
  },
  leftContainer: {
    height: vh * 4,
    width: vh * 4,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh * 4,
  },
  backIcon: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
  },
  container: {
    height: vh * 18,
    // alignItems: "flex-end",
    flexDirection: 'row',
    // marginBottom: vh * 2,
    borderBottomRightRadius: vh * 7,
    // backgroundColor: "red"
  },
  imageBackground: {
    borderBottomRightRadius: vh * 5,
  },
  bottomHeader: {
    height: vh * 6,
    backgroundColor: 'green',
    width: vw * 20,
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

  // , circleLeftTop: {
  //     height: vh * 11,
  //     width: vw * 22,
  //     borderRadius: vh * 10,
  //     backgroundColor: colors.white,
  //     opacity: 0.35,
  //     alignItems: "flex-end",
  //     marginTop: -vh * 2,
  //     marginRight: vw * -2,

  // },
  // innerLeftCircle: {
  //     height: vh * 8,
  //     width: vw * 16,
  //     backgroundColor: colors.white,
  //     opacity: 0.45,
  //     borderRadius: vh * 5,
  // },
  // ContentContainer: {
  //     position: "absolute",
  //     alignItems: "center",
  //     height: vh * 17,
  //     zIndex: 999,
  //     // backgroundColor: "red",
  //     // marginTop: vh * 2,
  //     justifyContent: "center",
  //     marginLeft: vw * 5,
  //     // backgroundColor: "red"
  // },
});
export default styles;
