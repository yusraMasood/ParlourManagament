import {useDispatch} from 'react-redux';
import {getMessage, Toast} from '../../Api/APIHelpers';
import {Register} from '../../state/auth';
import {toggleGlobalLoader} from '../../state/general';
import {validateEmail, validatePhoneNumber} from '../../Utils/helperFunctions';

export default () => {
  const dispatch = useDispatch();
  const registerUser = async ({
    firstName,
    lastName,
    email,
    phone,
    password,
    confirmPassword,
  }) => {
    dispatch(toggleGlobalLoader(true));
    try {
      if (firstName.trim() === '') {
        Toast.error('Please Enter Your First Name');
        throw new Error('Please Enter Your First Name');
      }
      if (lastName.trim() === '') {
        Toast.error('Please Enter Your Last Name');
        throw new Error('Please Enter Your Last Name');
      }
      if (email.trim() === '') {
        Toast.error('Please Enter Your Email');
        throw new Error('Please Enter Your Email');
      }
      // if (!validateEmail(email)) {
      //   Toast.error('Please Enter Valid Email');
      //   throw new Error('Please Enter Valid Email');
      // }
      if (phone.trim() === '') {
        Toast.error('Please Enter Your Phone Number');
        throw new Error('Please Enter Phone Number');
      }
      // if (!validatePhoneNumber(phone)) {
      //   Toast.error('Please Enter Valid Phone Number.');
      //   throw new Error('Please Enter Valid Phone Number');
      // }
      if (password.trim() === '') {
        Toast.error('Please Enter Your Password');
        throw new Error('Please Enter Your Password');
      }
      if (password.length < 8) {
        Toast.error('Password must be 8 characters long.');
        throw new Error('Password must be 8 characters long.');
      }
      if (confirmPassword.trim() === '') {
        Toast.error('Please Confirm Your Password');
        throw new Error('Please Confirm Your Password');
      }
      if (password !== confirmPassword) {
        Toast.error('Your Passwords does not match');
        throw new Error('Your Passwords does not match');
      }
      const response = await dispatch(
        Register({
          firstName,
          lastName,
          email,
          phone,
          password,
          confirmPassword,
        }),
      ).unwrap();
      Toast.success('You have been successfully signed in.');
      dispatch(toggleGlobalLoader(false));
      return response;
    } catch (e) {
      dispatch(toggleGlobalLoader(false));
      console.log('errr', e);
      Toast.error(e?.message);
      throw new Error(e);
    }
  };
  return {
    registerUser,
  };
};
