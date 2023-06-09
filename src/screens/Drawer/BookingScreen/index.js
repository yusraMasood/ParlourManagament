import React, {useState, useLayoutEffect, useEffect, useRef} from 'react';
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import styles from './styles';
import ScreenWrapper from '../../../components/wrappers/ScreenWrapper';
import InputField from '../../../components/Inputs/InputField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import OutfitBold from '../../../components/Texts/OutfitBold';

const BookingScreen = props => {
  return (
    <ScreenWrapper style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <OutfitBold style={styles.titleText}>Booking Details:</OutfitBold>
        <InputField
          //   reference={firstNameRef}
          //   onSubmitEditing={() => lastNameRef.current.focus()}
          label="Number of Attendees"
          //   onChangeText={setFirstName}
          //   value={firstName}
          placeholder="Enter Number of Attendees"
          require
        />
        <OutfitBold style={[styles.titleText, styles.midHeadingText]}>
          Payment Details:
        </OutfitBold>
        <InputField
          //   reference={firstNameRef}
          //   onSubmitEditing={() => lastNameRef.current.focus()}
          label="Cardholder Name"
          //   onChangeText={setFirstName}
          //   value={firstName}
          placeholder="Enter Cardholder Name"
          require
        />
        <InputField
          //   reference={firstNameRef}
          //   onSubmitEditing={() => lastNameRef.current.focus()}
          label="Card Number"
          //   onChangeText={setFirstName}
          //   value={firstName}
          placeholder="Enter Card Number"
          require
        />
        <View style={styles.midInputContainer}>
          <InputField
            //   reference={firstNameRef}
            //   onSubmitEditing={() => lastNameRef.current.focus()}
            label="Card Number"
            //   onChangeText={setFirstName}
            //   value={firstName}
            placeholder="Enter Card Number"
            require
          />
          <InputField
            //   reference={firstNameRef}
            //   onSubmitEditing={() => lastNameRef.current.focus()}
            label="Card Number"
            //   onChangeText={setFirstName}
            //   value={firstName}
            placeholder="Enter Card Number"
            require
          />
        </View>
        <InputField
          //   reference={firstNameRef}
          //   onSubmitEditing={() => lastNameRef.current.focus()}
          label="Cvv Number"
          //   onChangeText={setFirstName}
          //   value={firstName}
          placeholder="Enter Cvv Number"
          require
        />
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
};
export default BookingScreen;
