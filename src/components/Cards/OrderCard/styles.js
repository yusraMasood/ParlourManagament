import React from 'react';
import {StyleSheet} from 'react-native';
import {colors, themeShadow} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: vw * 90,
    alignItems: 'center',
    height: vh * 11,
    // marginTop: vh*1,
    backgroundColor: colors.defaultThemeRed,
    padding: vh * 2,
    marginBottom: vh * 2.5,
    marginTop: vh * 1,
    marginHorizontal: vw * 1,
    borderRadius: vh*2
  },
  btnContainer:{
    // height: vh
    // backgroundColor: "red",
    paddingVertical: vh*0.2,
    paddingHorizontal: vw*1.5,
    borderRadius: vh*2,
    marginBottom: vh*2
  },
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
  rightIcon: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
  },
  rightIconContainer: {
    backgroundColor: colors.maroon,
    height: vh * 5,
    width: vw * 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh * 1.5,
  },
  priceText: {
    fontSize: vh * 2.2,
    color: colors.white,
  },
  orderText: {
    fontSize: vh * 1.9,
    color: colors.blackappText,
    // marginVertical: vh*0.5,
  },
  cancelText: {
    fontSize: vh * 1.7,
    // marginVertical: vh*1,
    // backgroundColor: "blue",
    color: colors.white,
    paddingBottom: vh * 1,
    // marginTop: vh*1
  },
  dateText: {
    fontSize: vh * 1.65,
    // marginVertical: vh*1,
    paddingTop: vh * 0.5,
    paddingBottom: vh * 2,
  },
});
export default styles;
