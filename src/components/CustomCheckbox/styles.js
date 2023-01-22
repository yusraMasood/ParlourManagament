import { StyleSheet } from 'react-native';
import { colors } from '../../utils/appTheme';
import { vh, vw } from '../../utils/dimensions';

export const styles = StyleSheet.create({
    checkboxContainer:{
        height: vh*2,
        width: vw*4,
        // backgroundColor: "red"
        borderColor: colors.btnYellowBorder,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center"

    },
    checkboxInnerContainer:{
        height: vh*2,
        width: vw*4,
        backgroundColor: colors.btnYellowBorder,
        alignItems: "center",
        justifyContent: "center"
    },
    container:{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: vh*1.5
    },
    title:{
        marginLeft: vw*3,
        fontSize: vh*1.7,
        color:colors.grey
    },
    tickImg:{
        height: vh*1.2,
        width: vh*1.2,
        resizeMode: "contain",
        tintColor: colors.black
    }

})