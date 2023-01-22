import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({
  logo: {
    height: vh * 5,
    width: vh * 5,
    resizeMode: 'contain',
    // marginTop: vh * 2,
  },
  dropImage:{
    height: vh*10,
    width: vh*10,
    resizeMode: "contain",
    marginBottom: vh*1
  },
  buttonNo:{
    width: vw*25
  },
  buttonYes:{
    width: vw*25,
    marginLeft: vw*3

  },
  okBtn:{
    // marginTop: vh*2,
    width: vw*25
  },
  text: {
    // marginVertical: vh * 2,
    marginTop: vh*1,
    marginBottom: vh*2,
    fontSize: vh*1.8,
    textAlign: "center"
  },
  title: {
    fontSize: vh * 2,
    marginTop: vh*1,
    color: colors.black,
    textAlign: 'center'
  },
  container: {
    height: vh * 30,
    alignItems: 'center',
    justifyContent: "center"
  },
  // button: {
  //   marginHorizontal: vw * 2,
  //   backgroundColor: 'transparent',
  //   borderColor: colors.red,
  //   borderWidth: 1,
  // },

  imgIcon:{
    height: vh*8,
    width: vw*16,
    backgroundColor: colors.red,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: vh*5,
  }
});

export default styles;