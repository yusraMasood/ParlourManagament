import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import ContentContainer from '../../../../components/wrappers/ContentContainer';
import InputContainer from '../../../../components/Inputs/InputContainer';
import CustomButton from '../../../../components/Buttons/CustomButton';
import {vw} from '../../../../utils/dimensions';
import {Rating} from 'react-native-ratings';
import {icons} from '../../../../assets/images';
import {colors} from '../../../../utils/appTheme';
import useBooking from '../../../../Hooks/useBooking';
// import {GetContactUs} from '../../../StateManagement/HomeSlice';
// import {useDispatch, useSelector} from 'react-redux';
// import {showToast} from '../../../Api/HelperFunction';
// import {validateEmail} from '../../../utils/Validations';

const ReviewScreen = props => {
  const id = props?.route?.params?.id;

  const {postReview} = useBooking();

  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);

  const messageRef = useRef(null);
  // const dispatch = useDispatch();

  const submitForm = () => {
    postReview({
      id,
      rating,
      comment: message,
    }).then(res => {
      props?.navigation?.goBack();
    });
  };
  return (
    <ScreenWrapper>
      <ContentContainer contentContainerStyle={{paddingHorizontal: vw * 5}}>
        {/* <Rating
          type="custom"
          ratingImage={icons.star}
          ratingColor="transparent"
          ratingBackgroundColor="transparent"
          ratingCount={5}
          imageSize={15}
          //   readonly
          //   onFinishRating={this.ratingCompleted}
          // style={{paddingVertical: 10}}
        /> */}
        <Rating
          type="custom"
          ratingImage={icons.star}
          ratingColor={colors.defaultThemeRed}
          ratingBackgroundColor="#c8c7c8"
          ratingCount={5}
          imageSize={30}
          onFinishRating={value => {
            console.log('value', value);
            setRating(value);
          }}
          style={{paddingVertical: 10}}
        />
        <InputContainer
          reference={messageRef}
          value={message}
          onChangeText={setMessage}
          style={styles.textinputContainer}
          label={'Your message here'}
          placeholder={'Write here'}
          // onSubmitEditing={submitForm}
          required
        />
        <View style={styles.buttonView}>
          <CustomButton text="Post" onPress={submitForm} />
        </View>
      </ContentContainer>
    </ScreenWrapper>
  );
  return (
    <ScreenWrapper style={styles.container}>
      {/* <ContentContainer
        aware
        contentContainerStyle={{paddingHorizontal: vw * 5}}>
        
        <InputField
          label="Name"
          placeholder="Enter Name"
          require
          value={name}
          onChangeText={setName}
          onSubmitEditing={() => emailRef.current.focus()}
          keyboardType="email-address"
        />
        <InputField
          reference={emailRef}
          label="Email Address"
          value={email}
          // editable={false}
          onChangeText={setEmail}
          placeholder="Enter Email Address"
          require
          onSubmitEditing={() => phoneRef.current.focus()}
          keyboardType="email-address"
        />
        <InputField
          reference={phoneRef}
          label="Phone"
          placeholder="Enter Phone"
          keyboardType={'numeric'}
          require
          value={phone}
          onChangeText={setPhone}
          onSubmitEditing={() => subjectRef.current.focus()}
        />
        <InputField
          reference={subjectRef}
          label="Subject"
          placeholder="Enter Subject"
          require
          value={subject}
          onChangeText={setSubject}
          onSubmitEditing={() => messageRef.current.focus()}
        />
        <InputContainer
          reference={messageRef}
          value={message}
          onChangeText={setMessage}
          style={styles.textinputContainer}
          label={'Your message here'}
          placeholder={'Write here'}
          // onSubmitEditing={submitForm}
          required
        />
        <View style={styles.buttonView}>
          <CustomButton
            text="Send Feedback"
            onPress={submitForm}
          />
        </View>
      </ContentContainer> */}
    </ScreenWrapper>
  );
};
export default ReviewScreen;
