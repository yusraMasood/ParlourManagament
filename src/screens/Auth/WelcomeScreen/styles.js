import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles=StyleSheet.create({
container:{
    flex:1,
    // alignItems: "flex-end"
    alignItems: "center",
    backgroundColor: colors.white,
    justifyContent: "flex-end"
},
logoIcon:{
    height: vh*22,
    width: vh*22,
    resizeMode: "contain",
    marginBottom: vh*4,
    // backgroundColor: "red"
},
signupBtn:{
    borderColor:colors.black,
    borderWidth:1,
    backgroundColor:  colors.white,
    borderRadius: vw*2
},
btnText:{
    color: colors.black
},
})
export default styles