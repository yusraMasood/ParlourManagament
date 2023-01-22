import React, { useRef, useImperativeHandle } from 'react';
import { Image, View } from 'react-native';
import { colors, linearColors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';
import CustomButton from '../../Buttons/CustomButton';
import InputField from '../../Inputs/InputField';
import OutfitMedium from '../../Texts/OutfitMedium';
import OutfitRegular from '../../Texts/OutfitRegular';
import PopupWrapper from '../PopupWrapper';
import styles from './styles';

const SubscribePopup = props => {
    const popup = useRef(null);

    useImperativeHandle(props?.reference, () => ({
        hide: hide,
        show: show,
    }));

    const show = () => {
        popup?.current?.show();
    };

    const hide = () => {
        popup?.current?.hide();
    };

    const onYes = () => {
        if (props?.onAccept) {
            props?.onAccept();
        }
        hide();
    };

    return (
        <PopupWrapper reference={popup}>
            <View style={styles.container}>
                <OutfitMedium style={styles.subscribeAlertText}>Subscribtion Alert</OutfitMedium>
                <OutfitRegular style={styles.paraText}>Please mention your email in the box  below and
                    subscribe to our on - demand video</OutfitRegular>
                <InputField label="Email" placeholder="Enter Email" require
                    onSubmitEditing={onYes}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    keyboardType="email-address"
                />
                <View style={styles.btnContainer}>
                <CustomButton onPress={onYes} style={styles.btn}  text="SUBSBRIBE NOW" linearColors={linearColors.blackBtn} />
                </View>
            </View>
        </PopupWrapper>
    );
};
export default SubscribePopup;