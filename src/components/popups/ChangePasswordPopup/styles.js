import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({
  logo: {
    height: vh * 5,
    width: vh * 5,
    resizeMode: 'contain',
  },
  okBtn:{
    marginTop: vh*3
  },
  input:{
    width: vw*65
  },
  container: {
    height: vh * 45,
    // width: vw*80,
    // width: vw*88,
    alignItems: 'center',
    justifyContent: "center"
  },
  changeText:{
    color: colors.blackappText,
    fontSize: vh*2,
    // marginBottom: vh*3
  },
  awareStyle:{
    alignItems: "center"
  }
});

export default styles;