import { StyleSheet } from 'react-native'
import { colors } from '../../utils/appTheme'
import { vh, vw } from '../../utils/dimensions'

const styles = StyleSheet.create({
    rowContainer: {
        marginBottom: vh * 5,
        width: vw*86
      },
      labelContainer: {
        flexDirection: 'row',
      },
      iconStyle:{
        height: vh*2,
        width: vh*2,
        resizeMode: "contain",
        paddingBottom: vh*0.25,
      },
      label: {
        color: colors.blackappText,
        marginBottom: vh * 1,
        fontSize: vh * 1.9,
      },
      require: {
        color: colors.red,
      },
      rowContainerForDate:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: colors.greyBtnOrder,
        // paddingTop: vh*0.2
      },
      nameText: {
        fontSize: vh * 1.8,
        paddingTop: vh * 1,
        paddingBottom: vh*0.25,
      },
})
export default styles