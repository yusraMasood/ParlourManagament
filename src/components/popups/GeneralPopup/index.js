import React, {useRef, useImperativeHandle} from 'react';
import {Image, View} from 'react-native';
import { generalImages } from '../../../assets/images';
import { colors, linearColors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';
import CustomButton from '../../Buttons/CustomButton';
import OutfitMedium from '../../Texts/OutfitMedium';
import OutfitRegular from '../../Texts/OutfitRegular';
import PopupWrapper from '../PopupWrapper';
import styles from './styles';

const GeneralPopup = props => {
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
        {props.img?
        <Image source={generalImages.drop} style={styles.dropImage}/>:
        <View style={styles.imgIcon}>
        <Image source={props.icon} style={styles.logo} />
        </View>}

        <OutfitMedium style={styles.title}>{props.title}</OutfitMedium>

        <OutfitRegular style={styles.text}>{props.details}</OutfitRegular>

          
          {props.question ?
        <View style={{flexDirection: 'row', alignItems: 'center'}}>

           <CustomButton
           text="YES"
           onPress={onYes}
           style={styles.buttonNo}
           titleStyle={{color: colors.red}}
         />
         <CustomButton
         text="NO"
         linearColors={linearColors.blackBtn}
         onPress={hide}
         style={styles.buttonYes}
         titleStyle={{color: colors.red}}
       />
       </View>
          
        :<CustomButton
        text="Ok"
        linearColors={linearColors.blackBtn}
        onPress={onYes}
        style={styles.okBtn}
        // style={{marginHorizontal: vw * 2}}
      />
        }
          {/* */}
        {/* </View> */}
      </View>
    </PopupWrapper>
  );
};
export default GeneralPopup;