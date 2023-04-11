import React, {  useRef, useState} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';

import OutfitRegular from '../../../../components/Texts/OutfitRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import {generalImages, icons} from '../../../../assets/images';
import RippleHOC from '../../../../components/wrappers/Ripple';
import CustomButton from '../../../../components/Buttons/CustomButton';
import InputField from '../../../../components/Inputs/InputField';
import RadioButton from '../../../../components/RadioButton';
import DateTimeField from '../../../../components/DateTimeField';
import ImagePicker from '../../../../components/ImagePicker';
import ContentContainer from '../../../../components/wrappers/ContentContainer';

const EditProfileScreen = props => {
  const [profileSelection, setProfileSelection] = useState(false);

  const [firstName, setFirstName] = useState("Atlas");
  const [lastName, setLastName] = useState("Corrigan");
  const [gender, setGender] = useState("female");
  const [dob, setDob] = useState(
  "28/2/23");
  console.log('DOB', dob);
  const [image, setImage] = useState(null);
  const [workoutIndex, setWorkoutIndex] = useState(0);

  const workout = ['Female', 'Male', 'Other'];
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  return (
    <ScreenWrapper
      style={styles.profileContainer}>
        <ContentContainer aware>
        <View>
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
      </ContentContainer>
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
