import { StyleSheet } from 'react-native'
import { colors, themeShadow } from '../../../../utils/appTheme';
import { vh, vw } from '../../../../utils/dimensions';


const styles = StyleSheet.create({
    status:{
        fontSize: vh * 1.5,
      },
      pendingBack:{
        backgroundColor: "rgba(252,71,64,0.2)"
      },
      inProcessBack:{
        backgroundColor: "rgba(67,91,246,0.2)"
      },
      completedBack:{
        backgroundColor: "rgba(67,252,46,0.2)"
      },
      pending: {
        color: colors.red,
       
      },
      inProcess: {
        color: colors.purple,
      },
      completed: {
        color: colors.completeText,
      },
      btnContainer:{
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: vh*0.2,
        paddingHorizontal: vw*1.5,
        borderRadius: vh*2,
        marginBottom: vh*2,
        marginTop: vh*1
      },
    container: {
        paddingTop: vh * 9,
        paddingHorizontal: vw * 5,
        paddingBottom: vh*4
    },
    billingDetailsContainer: {
        // marginTop: vh * 2,
        marginBottom: vh*2,
        borderRadius: vh * 2,
        paddingVertical: vh * 3,
        paddingHorizontal: vw * 3,
        backgroundColor: colors.white,
        ...themeShadow
    },
    hrline: {
        borderBottomWidth: 1,
        borderBottomColor: colors.borderGrey,
        width: vw * 80,
        opacity: 0.25,
        marginVertical: vh * 1,
        marginBottom: vh*2,

    },
    pendingText: {
        fontSize: vh * 1.8,
        color: colors.red,
        paddingTop: vh * 0.6
    },
    itemContainer: {
        alignItems: "flex-end",
        width: vw * 80,
    },
    userText: {
        fontSize: vh * 1.7,
        color: colors.blackappText,
        paddingTop: vh * 1
    },
    placedContainer: {
        marginBottom: vh * 3
    },
    orderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: vh * 2
    },
    totalTableContainer: {
        paddingTop: vh * 3,
        alignItems: "center"
    },
    subTotalContainer: {
        flexDirection: "row",
        width: vw * 80,
        justifyContent: "space-between",
        // marginTop: vh * 4,
        // marginBottom: vh*2
    },
    totalContainer: {
        flexDirection: "row",
        marginTop: vh * 0.5,
        justifyContent: "space-between",
        width: vw * 80,
    },
    userNameContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    totalText: {
        color: colors.black,
        fontSize: vh * 1.8
    },
    orderId: {
        fontSize: vh * 1.8,
        color: colors.greyText
    },
    orderIdValue: {
        color: colors.white,
        paddingTop: vh * 1,
        fontSize: vh * 1.7,
        paddingBottom: vh*1
        
    }

})
export default styles;