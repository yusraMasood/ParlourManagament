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
import {vh, vw} from '../../../utils/dimensions';
import ContentContainer from '../../../components/wrappers/ContentContainer';
import CustomButton from '../../../components/Buttons/CustomButton';
import useBooking from '../../../Hooks/useBooking';
import OutfitRegular from '../../../components/Texts/OutfitRegular';
import {colors} from '../../../utils/appTheme';

const BookingScreen = props => {
  const id = props?.route?.params?.serviceId;

  const {bookSalon} = useBooking();

  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [noOfAttendees, setNoOfAttendees] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setexpiryYear] = useState('');
  const [cvv, setCvv] = useState('');

  const handleBookPress = () => {
    bookSalon({
      paymentType: paymentMethod,
      from: startTime,
      to: endTime,
      date: appointmentDate,
      serviceId: id,
      card_number: cardNumber,
      exp_month: expiryMonth,
      exp_year: expiryYear,
      cvv: cvv,
    }).then(res => {});
  };

  return (
    <ScreenWrapper style={styles.container}>
      <ContentContainer aware={true} contentContainerStyle={styles.content}>
        <OutfitBold style={styles.titleText}>
          Payment Options:
        </OutfitBold>
        <View
          style={{
            flexDirection: 'row',
            marginTop: vh * 3,
            justifyContent: 'space-between',
            paddingRight: vw * 40,
          }}>
          <TouchableOpacity onPress={() => setPaymentMethod('cash')}>
            <OutfitRegular
              style={[
                {color: colors.grey, fontSize: vh * 2},
                paymentMethod === 'cash' && {
                  textDecorationLine: 'underline',
                  color: colors.white,
                },
              ]}>
              Cash
            </OutfitRegular>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setPaymentMethod('card')}>
            <OutfitRegular
              style={[
                {color: colors.grey, fontSize: vh * 2},
                paymentMethod === 'card' && {
                  textDecorationLine: 'underline',
                  color: colors.white,
                },
              ]}>
              Card
            </OutfitRegular>
          </TouchableOpacity>
        </View>
        <OutfitBold style={[styles.titleText, styles.midHeadingText]}>Booking Details:</OutfitBold>
        <InputField
          //   reference={firstNameRef}
          //   onSubmitEditing={() => lastNameRef.current.focus()}
          label="Appointment Date"
          value={appointmentDate}
          onChangeText={setAppointmentDate}
          placeholder="Enter Appointment Date"
          require
          keyboardType="number-pad"
        />
        <View style={styles.midInputContainer}>
          <InputField
            //   reference={firstNameRef}
            //   onSubmitEditing={() => lastNameRef.current.focus()}
            label="Start Time"
            onChangeText={setStartTime}
            value={startTime}
            placeholder="Enter Start Time"
            require
            inputContainerIcon={{width: vw * 40}}
            keyboardType="number-pad"
          />
          <InputField
            //   reference={firstNameRef}
            //   onSubmitEditing={() => lastNameRef.current.focus()}
            label="End Time"
            onChangeText={setEndTime}
            value={endTime}
            placeholder="Enter End Time"
            require
            inputContainerIcon={{width: vw * 40}}
            keyboardType="number-pad"
          />
        </View>
        {paymentMethod === 'card' && (
          <>
            <OutfitBold style={[styles.titleText, styles.midHeadingText]}>
              Payment Details:
            </OutfitBold>
            <InputField
              //   reference={firstNameRef}
              //   onSubmitEditing={() => lastNameRef.current.focus()}
              label="Card Number"
              onChangeText={setCardNumber}
              value={cardNumber}
              placeholder="Enter Card Number"
              require
              keyboardType="number-pad"
            />
            <View style={styles.midInputContainer}>
              <InputField
                //   reference={firstNameRef}
                //   onSubmitEditing={() => lastNameRef.current.focus()}
                label="Expiry Month"
                onChangeText={setExpiryMonth}
                value={expiryMonth}
                placeholder="Enter Expiry Month"
                require
                inputContainerIcon={{width: vw * 40}}
                keyboardType="number-pad"
              />
              <InputField
                //   reference={firstNameRef}
                //   onSubmitEditing={() => lastNameRef.current.focus()}
                label="Expiry Year"
                onChangeText={setexpiryYear}
                value={expiryYear}
                placeholder="Enter Expiry Year"
                require
                inputContainerIcon={{width: vw * 40}}
                keyboardType="number-pad"
              />
            </View>
            <InputField
              //   reference={firstNameRef}
              //   onSubmitEditing={() => lastNameRef.current.focus()}
              label="Cvv Number"
              onChangeText={setCvv}
              value={cvv}
              placeholder="Enter Cvv Number"
              require
              keyboardType="number-pad"
            />
          </>
        )}
        <View style={styles.ContentContainer}>
          <CustomButton
            text="Book Salon"
            // style={styles.btnView}
            onPress={handleBookPress}
          />
        </View>
      </ContentContainer>
    </ScreenWrapper>
  );
};
export default BookingScreen;
