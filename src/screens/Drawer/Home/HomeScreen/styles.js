import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils/appTheme';
import {vh} from '../../../../utils/dimensions';

const styles = StyleSheet.create({
  markerIconStyle: {
    height: vh * 5,
    width: vh * 5,
    tintColor: colors.red,
    resizeMode: 'contain',
  },
  btn: {
    position: 'absolute',
    bottom: vh * 10,
  },
});
export default styles;
