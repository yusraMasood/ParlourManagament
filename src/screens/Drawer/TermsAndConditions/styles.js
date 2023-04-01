import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: vw * 4,
  },
  privacyTitle: {
    marginTop: vh * 7,

    color: colors.blackappText,
    fontSize: vh * 2.1,
    paddingBottom: vh * 2,
  },
  paraText: {
    fontSize: vh * 1.9,
    // marginTop: vh*2
    // paddingTop: vh*2,
    // textAlign: "center"
  },
});
export default styles;
