import React, {useState, useImperativeHandle} from 'react';
import {Modal, StyleSheet, TouchableOpacity, View,Image} from 'react-native';
// import {BlurView} from '@react-native-community/blur';
import { vh, vw } from '../../../utils/dimensions';
import { colors, themeShadow } from '../../../utils/appTheme';
import { icons } from '../../../assets/images';
import RippleHOC from '../../wrappers/Ripple';

const PopupWrapper = props => {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(props?.reference, () => ({
    hide: hide,
    show: show,
  }));

  const hide = onCancel => {
    setVisible(false);
    if (typeof onCancel === 'function') {
      onCancel();
    } else {
      if (props.onCancel) {
        props.onCancel();
      }
    }
  };
  const show = onShow => {
    setVisible(true);
    if (typeof onShow === 'function') {
      onShow();
    } else {
      if (props.onShow) {
        props.onShow();
      }
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      style={styles.modal}>
        <Image source={icons.rightArrow} style={styles.crossIcon}/>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          onPress={hide}
          activeOpacity={0.9}
          style={styles.backdropContainer}>
          {/* <BlurView blurType="light" style={styles.blur} /> */}
        </TouchableOpacity>
        <View style={[styles.contentContainer, props.contentContainerStyle]}>
          <View style={styles.crossContainer}>
          <RippleHOC onPress={hide}  >
          <Image source={icons.cross} style={styles.crossIcon}/>
          </RippleHOC>
          </View>
          {props.children}
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  crossContainer:{
    alignItems: "flex-end",
    paddingTop: vh*2.5,
    paddingRight: vw*4,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdropContainer: {
    height: 100 * vh,
    width: 100 * vw,
    // position: 'absolute',
    // top: 0,
    // left: 0,
  },
  crossIcon:{
    height: vh*1.4,
    width: vh*1.4,
    resizeMode: "contain"
  },
  blur: {
    height: 100 * vh,
    width: 100 * vw,
  },
  contentContainer: {
    backgroundColor: colors.white,
    width: vw * 78,
    // bottom: 0,
    position: 'absolute',
    // borderTopEndRadius: vh * 4,
    // borderTopStartRadius: vh * 4,
    borderRadius: vh*3,
    ...themeShadow,
  },
});
export default PopupWrapper;