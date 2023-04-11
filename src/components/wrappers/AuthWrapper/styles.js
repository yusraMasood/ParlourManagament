import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const TOPLEFTHEIGHT=vh*35;
const TOPLEFTWIDTH=vw*79;
const TOPPOSITION = -TOPLEFTHEIGHT*0.25
const TOPLEFTPOSITION= -TOPLEFTWIDTH*0.1

const BOTTOMRIGHTHEIGHT=vh*35;
const BOTTOMRIGHTWIDTH=vw*79;
const BOTTOMPOSITION = -TOPLEFTHEIGHT*0.2
const BOTTOMRIGHTPOSITION= -TOPLEFTWIDTH*0.25
const styles=StyleSheet.create({
container:{
    flex:1,
    backgroundColor: colors.black,
    // alignItems: "center",
},
// contentContainer:{
//   flexGrow:1,
//   alignItems: "center"
// },
childrenContainer:{
  flex:1
},
// logoContainer:{
//   alignItems: "center",
// },
// titleText:{
//     marginTop: vh*2,
//     marginBottom: vh*5,
//     fontSize: vh*2.3,
//     color: colors.blackappText,
// },
topLeft:{
    position: "absolute",
    height: TOPLEFTHEIGHT,
    width: TOPLEFTWIDTH,
    top: TOPPOSITION,
    left: TOPLEFTPOSITION,
},
// signupAccount:{
   
//     flex:1,
//     // alignItems: "flex-end",
//     // backgroundColor: "red",
//     justifyContent: "flex-end",
//     paddingBottom: vh*4
//   },
//   btnContainer:{
//     flexDirection: "row"
//   },
  // dontAccountText:{
  //   color: colors.blackappText,
  //   textDecorationLine: "underline"
  // },
  // signupText:{
  //   color: colors.defaultThemeRed,
  //   textDecorationLine: "underline"
  // },
bottomRight:{
    position: "absolute",
    height: BOTTOMRIGHTHEIGHT,
    width:  BOTTOMRIGHTWIDTH,
    bottom: BOTTOMPOSITION,
    right: BOTTOMRIGHTPOSITION,
},
// logo:{
//   // marginTop: vh*10,
//     height: vh*16,
//     width: vh*16,
//     resizeMode:"contain"
// }
})
export default styles