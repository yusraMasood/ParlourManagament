import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: vh * 8,
  },
  textinputContainer: {
    width: vw * 85,
  },
  buttonView: {
    marginTop: vh * 5,
    // flex:1,
    // justifyContent: "flex-end",
    // paddingBottom: vh*3
  },
});
export default styles;
