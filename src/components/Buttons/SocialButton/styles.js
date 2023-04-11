import { StyleSheet } from 'react-native';
import { colors, themeShadow } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({

    contentContainer:{
        flexDirection: "row",


    },
    container: {
        height: vh*6,
        marginTop: vh*2,
        width: vw*75,
        marginBottom: vh * 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.white,
        ...themeShadow

    },
    text: {
        color: colors.white,
        paddingLeft: vw*4,
    },
    socialIcon:{
        height: vh*2,
        width: vh*2,
        resizeMode: "contain"
    }
})
export default styles