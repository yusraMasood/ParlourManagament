import { StyleSheet } from 'react-native';
import { colors, themeShadow } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';


const styles = StyleSheet.create({
    veganOuterContainer:{
        height: vh*17,
        // width: vw*100,
        marginVertical: vh*1,
        alignItems: "center",
        justifyContent: "center"
        // backgroundColor: colors.red
    },
    productImageContainer:{
        position: "absolute",
        right: vw*15,
    },
    dietImage:{
        height: vh*17,
        width: vw*22,
       
        borderRadius: vh*3,
        resizeMode:"contain",
    },
    veganContainer:{
        flexDirection: "row",
        width: vw*85,
        padding: vh*2,
        height: vh*11.2,
        borderRadius: vh*2,
        justifyContent: "space-between",
        backgroundColor: colors.white,
        ...themeShadow
    },
    veganText:{
        fontSize: vh*1.9,
        width: vw*45,
        // backgroundColor: "red",
        color: colors.defaultRed
    },
    priceText:{
        paddingTop: vh*0.6,
        color: colors.grey,
        fontSize: vh*1.8,
    },
    cartText:{
        fontSize: vh*1.8,
        textDecorationLine: "underline",
        color: colors.blackappText
    },
})
export default styles