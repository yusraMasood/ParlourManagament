import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh } from '../../../utils/dimensions';

const styles=StyleSheet.create({
container:{
    // justifyContent: "center",
    paddingTop: vh*10,
    alignItems: "center"
    // flex:1,
    // marginTop: vh*5
    // marginTop: vh*10
},
signupAccount:{
  // height: vh*20,
  // alignItems: "flex-end",
    flexDirection: "row",
    marginTop: vh*17
    // position: "absolute",
    // bottom: vh*3
    // flex:1
  },
  dontAccountText:{
    color: colors.blackappText,
    textDecorationLine: "underline"
  },
  signupText:{
    color: colors.defaultThemeRed,
    textDecorationLine: "underline"

  },
  logo:{
  // marginTop: vh*10,
    height: vh*16,
    width: vh*16,
    resizeMode:"contain"
},
titleText:{
  marginTop: vh*2,
  marginBottom: vh*5,
  fontSize: vh*2.3,
  color: colors.blackappText,
},
})
export default styles