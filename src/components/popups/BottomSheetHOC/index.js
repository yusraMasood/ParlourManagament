// import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { Image, Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native'
import { BlurView } from '@react-native-community/blur';



const BottomSheetHOC = (props) => {
    const navigation = useNavigation();
    return (
        <Modal animationType={"slide"} transparent={true} visible={props.visible}>
            {/* <TouchableWithoutFeedback onPress={() => { props.setVisibility(false) }}> */}

            <TouchableOpacity activeOpacity={0} style={{ flex: 1, backgroundColor: 'rgba()' }} onPress={() => { props.setVisibility(false) }}>
                <BlurView
                    style={styles.absolute}
                    blurType="light"
                    blurAmount={10}
                    reducedTransparencyFallbackColor="white"
                />
            </TouchableOpacity>
            <View style={styles.modalInnerContainer}>
                {
                    props.list?.length > 0 &&
                    props.list.map((item, index) => {
                        return (
                            <View>
                                <TouchableOpacity style={styles.optionContainer} onPress={() => { item?.onClick(); props.setVisibility(false); }} >
                                    {/* <Image style={styles.optionIcon} resizeMode={"contain"} source={require('../../assets/images/popup-icons/profile.png')} /> */}
                                    <Text style={[styles.optionText, props.textStyle]}>{item?.name}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })

                }
            </View>
        </Modal >

    );
}


export default BottomSheetHOC;