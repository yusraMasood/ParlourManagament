import { StyleSheet } from "react-native";
import { colors } from "../../../utils/appTheme";
import { vh, vw } from "../../../utils/dimensions";

export const styles = StyleSheet.create({

    modal: {
        flex: 1
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    blurBackground: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,

    },
    blurView: {
        flex: 1
    },

    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

    modalInnerContainer: {
        width: vw * 100,
        backgroundColor: "#FFF",
        position: 'absolute',
        bottom: 0,
        paddingTop: vh * 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: vw * 8,
        borderTopRightRadius: vw * 8,
        zIndex: 99999,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        borderColor: "#CCC",
        borderWidth: 1
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: "#999",
        borderStyle: 'solid',
        borderBottomWidth: 0.3,
        width: vw * 100,
        paddingHorizontal: vw * 4,
        paddingVertical: vh * 2
    },
    optionIcon: {
        width: vw * 6,
        height: vw * 6,
        marginRight: vw * 4
    },
    optionText: {
        // fontFamily: fonts.Rubik.Regular,
        fontSize: 17,
        color: colors.lightPink,
    }
});