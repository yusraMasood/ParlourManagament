import { StyleSheet } from 'react-native';
import { colors } from "../../../../utils/appTheme"
import { vh, vw } from '../../../../utils/dimensions';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // backgroundColor: colors.black,
    // marginTop: vh * 4,
    flex: 1,
    width: vw * 100,
  },
  contentContainer:{
    paddingBottom: vh*10
  },
});
export default styles;