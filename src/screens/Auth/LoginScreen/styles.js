import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles=StyleSheet.create({
    container:{
        // justifyContent: "center",
        paddingTop: vh*10,
        alignItems: "center"
    },
    content:{
        alignItems: "center"
    },
logo:{
      height: vh*16,
      width: vh*16,
      resizeMode:"contain"
  },
input:{
    marginTop: vh*4
},
signupBtn:{
    borderColor:colors.black,
    borderWidth:1.5,
    backgroundColor:  colors.white,
    borderRadius: vh*2
},
btnText:{
    color: colors.black
},
forgotContainer:{
    alignItems: "flex-end",
    width: vw*85,
    marginTop: vh*1,
    marginBottom: vh*5,
    

},
forgotPassword:{
    color: colors.white,
    textDecorationLine: "underline",
    fontSize: vh*1.65
},
signupAccount:{
    flexDirection: "row",
    // position: "absolute",
    marginTop: vh*17

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
  titleText:{
    marginTop: vh*2,
    marginBottom: vh*5,
    fontSize: vh*2.3,
    color: colors.white,
},
})
export default styles