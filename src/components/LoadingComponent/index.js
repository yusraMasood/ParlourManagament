import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';
import {selectLoader} from '../../StateManagement/GeneralSlice';
import {colors} from '../../utils/appTheme';
import {vh} from '../../utils/dimensions';
import styles from './styles';
import {useSelector} from 'react-redux';

const LoadingComponent = () => {
    const loader = useSelector(selectLoader);
  return (
    <Modal transparent visible={loader}>
      <BlurView
        style={styles.container}
        blurType="light"
        blurAmount={5}
        blurRadius={10}></BlurView>
      <View style={styles.loader}>
        <ActivityIndicator color={colors.defaultThemeRed} size={vh * 5} />
      </View>
    </Modal>
  );
};

export default LoadingComponent;
