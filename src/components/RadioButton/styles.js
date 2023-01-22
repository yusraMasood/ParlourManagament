import {StyleSheet} from 'react-native';
import {colors} from '../../utils/appTheme';
import {vh, vw} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  radioOuter: {
    height: vh * 3,
    width: vh * 3,
    borderRadius: vh * 3,
    // backgroundColor: 'red',
    borderWidth: 1,
    borderColor: colors.radioGrey,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "red"
  },
  radioInner: {
    height: vh * 2.2,
    width: vh * 2.2,
    borderRadius: vh * 3,
    backgroundColor: colors.radioGrey,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    paddingLeft: vw * 3,
    fontSize: vh * 1.9,
  },
});
