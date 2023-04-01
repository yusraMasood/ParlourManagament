import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import InputContainer from '../../../components/Inputs/InputContainer';
import InputField from '../../../components/Inputs/InputField';
import ScreenWrapper from '../../../components/wrappers/ScreenWrapper';
import CustomButton from '../../../components/Buttons/CustomButton';
// import {GetContactUs} from '../../../StateManagement/HomeSlice';
// import {useDispatch, useSelector} from 'react-redux';
// import {showToast} from '../../../Api/HelperFunction';
import ContentContainer from '../../../components/wrappers/ContentContainer';
// import {validateEmail} from '../../../utils/Validations';

const ContactUs = props => {
  // const profileUser = useSelector(state => state?.user?.user?.user?.userData);

  const [name, setName] = useState();
  // console.log("profile user",profileUser);
  const [email, setEmail] = useState("Atlas@mgmai.com");
  //profileUser?.email
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // const firstNameRef = useRef(null)
  // const lastNameRef = useRef(null)
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);
  // const dispatch = useDispatch();

  // const submitForm = () => {
  //   if (name == '' || email == '' || subject == '' || message == '') {
  //     return showToast('Please Fill all Fields');
  //   }
  //   if (!validateEmail(email)) {
  //     return showToast('Please enter valid email address');
  //   }

  //   const body = {
  //     firstName: name,
  //     email: email,
  //     phone: phone,
  //     subject: subject,
  //     message: message,
  //   };
  //   console.log('body', body);
  //   dispatch(GetContactUs(body)).then(({type}) => {
  //     if (type == 'home/contactUs/fulfilled') {
  //       props.navigation.goBack();
  //     }
  //   });
  // };

  return (
    <ContentContainer aware>
      <ScreenWrapper style={styles.container}>
        {/* <InputField
                reference={firstNameRef}
                label="First Name" placeholder="Enter First Name" require
                onSubmitEditing={() => lastNameRef.current.focus()}
                keyboardType="email-address"
            /> */}
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
          <CustomButton text="Send Feedback" 
          // onPress={submitForm} 
          />
        </View>
      </ScreenWrapper>
    </ContentContainer>
  );
};
export default ContactUs;
