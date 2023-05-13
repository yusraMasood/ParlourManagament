import {useDispatch, useSelector} from 'react-redux';
import {getMessage, Toast} from '../../Api/APIHelpers';
import {ContactUs, EditProfile, GetProfile} from '../../state/account';
import {Logout} from '../../state/auth';
import {toggleGlobalLoader} from '../../state/general';
import {validateEmail} from '../../Utils/helperFunctions';

const useProfile = () => {
  const profile = useSelector(state => state.account.profile);

  const dispatch = useDispatch();
  const getProfile = async () => {
    try {
      const response = await dispatch(GetProfile()).unwrap();
      return response;
    } catch (e) {
      Toast.error(e);
    }
  };
  const editProfile = async ({name, phone, image, address}) => {
    try {
      var data = {
        full_name: name,
        phone_number: phone,
        address,
      };
      if (name.trim() === '') {
        Toast.error('Please Enter Your Name');
        return;
      }
      if (phone.trim() === '') {
        Toast.error('Please Enter Your Phone Number');
        return;
      }
      if (phone.length !== 11) {
        Toast.error('Please Enter Valid Phone Number.');
        return;
      }
      if (address.trim() === '') {
        Toast.error('Please Enter Your Address');
        return;
      }
      if (image) {
        data.image = image;
      }
      dispatch(toggleGlobalLoader(true));
      const response = await dispatch(EditProfile(data)).unwrap();
      dispatch(toggleGlobalLoader(false));
      Toast.success('Profile has been updated successfully.');
      return response;
    } catch (e) {
      dispatch(toggleGlobalLoader(false));
      Toast.error(getMessage(e));
      throw new Error(getMessage(e));
    }
  };
  const contactUs = async ({email, name, subject, message}) => {
    dispatch(toggleGlobalLoader(true));
    try {
      if (name.trim() === '') {
        throw new Error('Please Enter Your Name');
      }
      if (email.trim() === '') {
        throw new Error('Please Enter Your Email');
      }
      if (!validateEmail(email)) {
        throw new Error('Please Enter Valid Email');
      }
      if (subject.trim() === '') {
        throw new Error('Please Enter Subject');
      }
      if (message.trim() === '') {
        throw new Error('Please Enter Your Message');
      }
      const response = await dispatch(
        ContactUs({email, name, subject, message}),
      ).unwrap();
      dispatch(toggleGlobalLoader(false));
      return response;
    } catch (e) {
      dispatch(toggleGlobalLoader(false));
      Toast.error(getMessage(e));
      throw new Error(e);
    }
  };
  const logout = async () => {
    dispatch(toggleGlobalLoader(true));
    try {
      const response = dispatch(Logout()).unwrap();
      dispatch(toggleGlobalLoader(false));
      return response;
    } catch (error) {
      dispatch(toggleGlobalLoader(false));
      throw new Error(error);
    }
  };
  return {
    profile,
    getProfile,
    editProfile,
    logout,
    contactUs,
  };
};

export default useProfile;
