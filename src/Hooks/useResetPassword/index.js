import {useDispatch} from 'react-redux';
import {getMessage, Toast} from '../../Api/APIHelpers';
import {ResetPassword, VerifyCode, VerifyEmail} from '../../state/auth';
import {toggleGlobalLoader} from '../../state/general';
import {validateEmail} from '../../Utils/helperFunctions';

export default () => {
  const dispatch = useDispatch();
  const verifyEmail = async ({email}) => {
    dispatch(toggleGlobalLoader(true));
    try {
      if (email.trim() === '') {
        Toast.error('Please Enter Your Email');
        return;
      }
      if (!validateEmail(email)) {
        Toast.error('Please Enter Valid Email');
        return;
      }
      const response = await dispatch(VerifyEmail({email})).unwrap();
      dispatch(toggleGlobalLoader(false));
      if (response) {
        Toast.success('Verification code has been sent to your email');
      }
      return response;
    } catch (e) {
      dispatch(toggleGlobalLoader(false));
      Toast.error(getMessage(e));
    }
  };
  const verifyCode = async ({code}) => {
    dispatch(toggleGlobalLoader(true));
    try {
      if (code.trim() === '') {
        Toast.error('Please Enter Verification Code');
        return;
      }
      const response = await dispatch(VerifyCode({code})).unwrap();
      dispatch(toggleGlobalLoader(false));
      Toast.success('Code has been verified successfully');
      return response;
    } catch (e) {
      dispatch(toggleGlobalLoader(false));
      Toast.error(e);
    }
  };
  const resetPassword = async ({email, password, confirmPassword}) => {
    dispatch(toggleGlobalLoader(true));
    try {
      if (password.trim() === '') {
        Toast.error('Please Enter Password');
        return;
      }
      if (password.length < 8) {
        Toast.error('Password must be 8 characters long.');
        return;
      }
      if (confirmPassword.trim() === '') {
        Toast.error('Please Confirm Password');
        return;
      }
      if (password !== confirmPassword) {
        Toast.error('Passwords Does Not Match');
        return;
      }
      const response = await dispatch(
        ResetPassword({email, password, confirmPassword}),
      ).unwrap();
      dispatch(toggleGlobalLoader(false));
      return response;
    } catch (e) {
      dispatch(toggleGlobalLoader(false));
      Toast.error(e);
    }
  };
  return {
    verifyEmail,
    verifyCode,
    resetPassword,
  };
};
