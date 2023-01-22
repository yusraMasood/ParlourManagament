import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import OutfitRegular from '../Texts/OutfitRegular';

const RadioButton = (props) => {
    // const [radio, setRadio] = useState(false)
    // console.log("props",props);
    return (
        <View style={[styles.container, props.style]}>
            <View style={styles.radioOuter}>
                <View style={props.focus && styles.radioInner} />
            </View>
            <OutfitRegular style={styles.title}>{props.item}</OutfitRegular>
        </View>
    )
}
export default RadioButton