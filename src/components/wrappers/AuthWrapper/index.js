import React, { Children } from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import styles from './styles';
import { generalImages, icons } from '../../../assets/images';

const AuthWrapper = (props) => {
    return (
        
        <View style={[styles.container]}>
            <Image source={generalImages.topLeft} style={styles.topLeft} />
            <Image source={generalImages.bottomRight} style={styles.bottomRight} />
            <View style={[styles.childrenContainer,props.style]}>

            {props.children}
            </View>
        </View>
    )
}
export default AuthWrapper;