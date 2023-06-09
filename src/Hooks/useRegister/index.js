import {useDispatch} from 'react-redux';
import {getMessage, Toast} from '../../Api/APIHelpers';
import {Register} from '../../state/auth';
import {toggleGlobalLoader} from '../../state/general';

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
        throw new Error('Please Enter Your First Name');
      }
      if (lastName.trim() === '') {
        throw new Error('Please Enter Your Last Name');
      }
      if (email.trim() === '') {
        throw new Error('Please Enter Your Email');
      }
      // if (!validateEmail(email)) {
      //   throw new Error('Please Enter Valid Email');
      // }
      if (phone.trim() === '') {
        throw new Error('Please Enter Phone Number');
      }
      // if (!validatePhoneNumber(phone)) {
      //   throw new Error('Please Enter Valid Phone Number');
      // }
      if (password.trim() === '') {
        throw new Error('Please Enter Your Password');
      }
      if (password.length < 8) {
        throw new Error('Password must be 8 characters long.');
      }
      if (confirmPassword.trim() === '') {
        throw new Error('Please Confirm Your Password');
      }
      if (password !== confirmPassword) {
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
    }
  };
  return {
    registerUser,
  };
};
