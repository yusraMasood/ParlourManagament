import { StyleSheet } from 'react-native'
import { colors } from '../../utils/appTheme'
import { vh, vw } from '../../utils/dimensions'

const styles = StyleSheet.create({
    switchContainer:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
   
      switchCircle:{
        height: 2 * vh,
        width: 2 * vh,
        borderRadius: 1 * vh,
      },
      switchOn: {
        backgroundColor: colors.defaultRed,
        alignItems: 'flex-end',
        paddingRight: 0.5 * vw,
      },
      switchOff: {
        // backgroundColor: colors.defaultRed,
        borderColor: colors.defaultRed,
        borderWidth:1,
        alignItems: 'flex-start',
        paddingLeft: 0.5 * vw,
      },
      setBtn:{
          
      },
      switch: {
        width: 10 * vw,
        height: 3.1 * vh,
        borderRadius: 4.5 * vw,
        // borderWidth:vh*0.23,
        
        // borderColor: appTheme.colors.black,
        marginLeft: vw*3,
        justifyContent: 'center',
      },
      whiteCircle: {
        backgroundColor:colors.white,
      
      },
      redCircle:{
        backgroundColor:colors.defaultRed,
        // height: 2 * vh,
        // width: 2 * vh,
        // borderRadius: 1 * vh,

      }
    //   drinkingContainer:{
    //       paddingTop: vh*5,
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //   },
    //   container:{
    //       paddingHorizontal: vw*4,
    //   },
    //   drinkingHoursText:{
    //       color: colors.blackappText,
    //       fontSize: vh*2.1
    //   }

})
export default styles