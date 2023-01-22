import React,{useState} from 'react';
import { View,Image} from 'react-native';
import {styles} from './styles';
import RippleHOC from '../wrappers/Ripple';
import OutfitMedium from '../Texts/OutfitMedium';
import { icons } from '../../assets/images';

const CustomCheckBox=(props)=>{
    const [checkbox,setCheckbox] =useState(false)

    const onPressCheck=()=>{
        setCheckbox(!checkbox)
        props.updateData(!checkbox)

    }
    return(
        <RippleHOC style={styles.container} onPress={onPressCheck}>
            <View style={styles.checkboxContainer} >
                {checkbox&& 
                <View style={styles.checkboxInnerContainer}>
                    <Image source={icons.tick} style={styles.tickImg}/>
                </View>}
            </View>
            <OutfitMedium style={styles.title}>{props.para}</OutfitMedium>
        </RippleHOC>
    )
}
export default CustomCheckBox