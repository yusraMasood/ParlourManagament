import React, {useLayoutEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Touchable,
} from 'react-native';

import OutfitRegular from '../../../../components/Texts/OutfitRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import {generalImages, icons} from '../../../../assets/images';
import RippleHOC from '../../../../components/wrappers/Ripple';
import CustomButton from '../../../../components/Buttons/CustomButton';
import InputField from '../../../../components/Inputs/InputField';
import RadioButton from '../../../../components/RadioButton';
import Header from '../../../../components/Header';
// import {GetProfile, UpdateProfile} from '../../../../StateManagement/UserSlice';
// import {useDispatch, useSelector} from 'react-redux';
// import moment from 'moment';
import DateTimeField from '../../../../components/DateTimeField';
import ImagePicker from '../../../../components/ImagePicker';
// import {validateDOB, validateName} from '../../../../utils/Validations';
// import {showToast} from '../../../../Api/HelperFunction';

const EditProfileScreen = props => {
  // const profileUser = useSelector(state => state?.user?.user?.user?.userData);
  // console.log('profileUser edit', profileUser);
  // const [date, setDate] = useState(new Date(moment()))
  const [profileSelection, setProfileSelection] = useState(false);

  const [firstName, setFirstName] = useState("Atlas");
  const [lastName, setLastName] = useState("Corrigan");
  const [gender, setGender] = useState("female");
  const [dob, setDob] = useState(
  "28/2/23");
  console.log('DOB', dob);
  const [image, setImage] = useState(null);
  const [workoutIndex, setWorkoutIndex] = useState(0);
  // const dispatch = useDispatch();

  const workout = ['Female', 'Male', 'Other'];
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  // const submitForm = () => {
  //   if (!validateName(firstName) || !validateName(lastName)) {
  //     return showToast(
  //       'First name and last name should not contain digits or special characters',
  //     );
  //   }
  //   if (!validateDOB(dob)) {
  //     return showToast('Plase enter your correct age');
  //   }
  //   const body = {
  //     first_name: firstName,
  //     last_name: lastName,
  //     DOB: moment(dob).format('DD/MM/YYYY'),
  //     image: image,
  //   };
  //   dispatch(UpdateProfile(body)).then(({type}) => {
  //     if (type == 'user/updateprofile/fulfilled') {
  //       dispatch(GetProfile());
  //       props.navigation.goBack();
  //     }
  //   });
  // };

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerBackground: () => {
        return (
          <View>
            <Header />
            <View style={styles.imgContainer}>
              <Image
                source={generalImages.defaultUserImage
                }
                style={styles.userImage}
              />
            </View>
            <RippleHOC
              onPress={() => setProfileSelection(true)}
              style={styles.cameraContainer}>
              <Image source={icons.camera} style={styles.cameraIcon} />
            </RippleHOC>
          </View>
        );
      },
    });
  }, [props.navigation]);

  return (
    <ScreenWrapper
      style={styles.profileContainer}
      linear={styles.linearInScreen}>
      <InputField
        reference={firstNameRef}
        label="First Name"
        placeholder="Enter First Name"
        require
        value={firstName}
        onChangeText={setFirstName}
        onSubmitEditing={() => lastNameRef.current.focus()}
        keyboardType="email-address"
      />
      <InputField
        value={lastName}
        onChangeText={setLastName}
        reference={lastNameRef}
        label="Last Name"
        placeholder="Enter Last Name"
        require
        // onSubmitEditing={() => dobRef.current.focus()}
        keyboardType="email-address"
      />
      <InputField
        // reference={emailRef}
        label="Email Address"
        placeholder="email@email.com"
        require
        editable={false}
        value={"Alast@gmail.com"}
        // value={profileUser?.email}
        // onChangeText={setEmail}
        // onSubmitEditing={() => dobRef.current.focus()}
        keyboardType="email-address"
      />
      <OutfitRegular style={styles.genderChooseText}>
        Chose Your Gender
      </OutfitRegular>
      <View style={styles.radioButtonContainer}>
        <FlatList
          data={workout}
          contentContainerStyle={styles.workoutContainer}
          horizontal={true}
          renderItem={({item, index}) => {
            const focus = index == workoutIndex;
            return (
              <RippleHOC
                // onPress={() => {
                //   setWorkoutIndex(index);
                //   setGender(item);
                // }}
                style={styles.radioContainer}>
                <RadioButton focus={focus} item={item} />
              </RippleHOC>
            );
          }}
        />
      </View>

      {/* <View style={styles.rowContainer}>
          <View style={styles.labelContainer}>
            <OutfitRegular style={styles.label}>DOB</OutfitRegular>
            <OutfitRegular style={styles.require}>*</OutfitRegular>
          </View>
          <TouchableOpacity style={{backgroundColor: "red"}} onPress={showDatepicker}>
          <View style={styles.rowContainerForDate}>
          <OutfitRegular style={styles.nameText}>
           {moment(date).format("YYYY/MM/DD")}
          </OutfitRegular>
          <Image source={icons.clockDob} style={styles.iconStyle}/>
          </View>
      </TouchableOpacity>

        </View> */}
      <View style={styles.dobRequireContainer}>
        <OutfitRegular style={styles.dobText}>DOB</OutfitRegular>
        <OutfitRegular style={styles.requireText}>*</OutfitRegular>
      </View>
      <DateTimeField date={dob} setDate={setDob} />

      <CustomButton
        // onPress={submitForm}
        text="UPDATE"
        style={styles.btnContainer}
      />
      <ImagePicker
        image={image}
        setImage={setImage}
        imageSelection={profileSelection}
        setImageSelection={setProfileSelection}
      />
    </ScreenWrapper>
  );
};
export default EditProfileScreen;
{
  /* <InputField
        reference={dobRef}
        label="DOB"
        rightIcon2={icons.clockDob}
        placeholder="Enter DOB"
        require
        value={dob}
        onChangeText={setDob}
        onSubmitEditing={submitForm}
        keyboardType="email-address"
      /> */
}
