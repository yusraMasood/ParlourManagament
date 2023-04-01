import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    // paddingTop: vh*,
    paddingHorizontal: vw * 4,
  },
  privacyTitle: {
    color: colors.blackappText,
    fontSize: vh * 2.1,
    marginTop: vh * 7,
    // paddingBottom: vh*1,
  },
  paraText: {
    fontSize: vh * 1.9,
    // marginTop: vh*2
    width: vw * 94,
    paddingTop: vh * 1.5,
    // textAlign: "center"
  },
});
export default styles;
