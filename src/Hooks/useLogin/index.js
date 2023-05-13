import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {getMessage, Toast} from '../../Api/APIHelpers';
import {saveCredentials} from '../../state/account';
import {Login} from '../../state/auth';
import {toggleGlobalLoader} from '../../state/general';
import { validateEmail } from '../../utils/Validations';

export default () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  const loginUser = async ({email, password, deviceId, rememberMe}) => {
    dispatch(toggleGlobalLoader(true));
    try {
      if (email.trim() === '') {
        Toast.error('Please Enter Your Email');
        throw new Error('Please Enter Your Email');
      }
      // if (!validateEmail(email)) {
      //   Toast.error('Please Enter Valid Email');
      //   throw new Error('Please Enter Valid Email');
      // }
      if (password.trim() === '') {
        Toast.error('Please Enter Your Password');
        throw new Error('Please Enter Your Password');
      }
      const response = await dispatch(
        Login({email, password, deviceId}),
      ).unwrap();
      // if (rememberMe) {
      //   dispatch(
      //     saveCredentials({email: email, password: password, rememberMe: true}),
      //   );
      // } else {
      //   dispatch(
      //     saveCredentials({email: null, password: null, rememberMe: false}),
      //   );
      // }
      Toast.success('You have been successfully logged in.');
      dispatch(toggleGlobalLoader(false));
      setToken(response);
      return response;
    } catch (e) {
      dispatch(toggleGlobalLoader(false));
      Toast.error(getMessage(e));
      throw new Error(getMessage(e));
    }
  };
  return {
    token,
    loginUser,
  };
};
