import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({

    ButtonWrapper: {
        paddingVertical: vh * 1.3,
        borderRadius: vw * 2,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        height: vh * 5.1,
        width: vw * 43.7,
        marginBottom: vh * 2,

    },
    text: {
        color: colors.white
    }
})
export default styles