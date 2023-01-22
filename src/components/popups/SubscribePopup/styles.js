import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    height: vh * 29,
    // alignItems: 'center',
    paddingHorizontal: vw * 4,
    justifyContent: 'center',
  },
  subscribeAlertText: {
    color: colors.blackappText,
    fontSize: vh * 2,
    marginBottom: vh * 1,
  },
  btnContainer: {
    alignItems: 'center',
    marginTop: vh * 2,
  },
  btn: {
    width: vw * 33,
  },
});

export default styles;
