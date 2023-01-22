import {StyleSheet} from 'react-native';
import { themeShadow } from '../../../utils/appTheme';
import { vh } from '../../../utils/dimensions';

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    overflow: 'hidden',
    // elevation:5,
    ...themeShadow,
 
  },
  outerStyle: {
    flex: 1,
    borderRadius: vh * 2,
    // elevation: 100,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
  },
});
export default styles;