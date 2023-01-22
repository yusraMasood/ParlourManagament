import {StyleSheet} from 'react-native';
import {colors, themeShadow} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: colors.drawerBlack,
  },
  routeContainer: {
    // marginTop: 3 * vh,
    paddingHorizontal: vw * 4,
  },
  name: {
    fontSize: 2.4 * vh,
    color: colors.gray,
    marginLeft: 5 * vw,
  },
  profileImageContainer: {
    ...themeShadow,
    marginLeft: vw * 3,
  },
  profileImage: {
    height: vh * 8,
    width: vh * 8,
    resizeMode: 'cover',
    borderRadius: (vh * 8) / 2,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  header: {
    marginTop: vh * 10,
    marginBottom: vh * 3,
    // marginBottom: vh * 3,
    paddingLeft: vw * 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    borderWidth: 1,
    // borderRadius: vh * 3,
    borderColor: colors.red,
    paddingVertical: vh * 0.8,
    paddingHorizontal: vw * 4,
    marginTop: vh * 1,
  },
  headerButtonText: {
    color: colors.red,
    fontSize: vh * 1.2,
  },
  headerRight: {
    alignItems: 'center',
    marginLeft: vw * 4,
  },
  username: {
    fontSize: vh * 2,
    width: vw * 23,
    // backgroundColor: "blue",
    color: colors.drawerText,
  },
  buttonText: {
    color: colors.red,
    fontSize: vh * 2,
  },
  button: {
    width: vw * 24,
    // marginTop: vh*2
  },
  buttonContainer: {
    // flex: 1,
    // alignItems: "center",
    marginTop: vh * 3,
    paddingLeft: vw * 12,
    // justifyContent: 'flex-end',
    // marginBottom: vh * 5,
  },
});
export default styles;
