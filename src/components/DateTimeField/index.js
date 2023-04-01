import React, { useState } from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import OutfitRegular from '../Texts/OutfitRegular';
import { icons } from '../../assets/images';
import { validateDOB } from '../../utils/Validations';
import { showToast } from '../../Api/HelperFunction';

const DateTimeField = (props) => {
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
      setShow(false);
      props.setDate(currentDate);    
  };

  const showMode = (currentMode) => {
    setShow(true)
    setMode(currentMode);
  };

  const showDatepicker = () => {
    // console.log('sosiosiohoi');
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  
  return (
    <View style={styles.mainContainer}>
   <View style={[styles.rowContainer,props.customStyle]}>
          <View style={styles.labelContainer}>
            <OutfitRegular style={styles.label}>{props.placeholder}</OutfitRegular>
         {props.require &&   <OutfitRegular style={styles.require}>*</OutfitRegular>}
          </View>
        {props.time ?
          <TouchableOpacity  onPress={showTimepicker}>
          <View style={styles.rowContainerForDate}>
          <OutfitRegular style={styles.nameText}>
           {moment(props.date).format("HH:MM A")}
          </OutfitRegular>
          <Image source={icons.clockDob} style={styles.iconStyle}/>
          </View>
      </TouchableOpacity>: 
       <TouchableOpacity  onPress={showDatepicker}>
          <View style={styles.rowContainerForDate}>
          <OutfitRegular style={styles.nameText}>
           {moment(props.date).format("YYYY/MM/DD")}
          </OutfitRegular>
          <Image source={icons.clockDob} style={styles.iconStyle}/>
          </View>
      </TouchableOpacity>}

        </View>
    {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={props.date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DateTimeField;