import { StyleSheet } from 'react-native';
import { colors } from "../../../../utils/appTheme"
import { vh, vw } from '../../../../utils/dimensions';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  topTabContainer: {
    marginTop: vh * 2,
    flex: 1,
    width: vw * 100,
    alignItems: 'center',
  },
  tabOuterContainer: {
    alignItems: 'center',
    paddingVertical: vh * 2,
    marginTop: vh*3,
    marginBottom : vh * 3,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: vw * 3,
    width: vw * 100,
  },
  focussedBtnContainer: {
    backgroundColor: colors.maroon,
    paddingVertical: vh*1,
    paddingHorizontal: vw*3,
    // width: vw * 24,
    // height: vh * 4.6,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    // width: vw * 22,
    // height: vh * 4.6,
    backgroundColor: colors.greyBtnOrder,
    paddingVertical: vh * 1,
    paddingHorizontal: vw * 3,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: colors.blackappText,
    fontSize: vh * 1.8,
  },
  focussedBtnText: {
    color: colors.white,
    fontSize: vh * 1.8,
  },
});
export default styles;