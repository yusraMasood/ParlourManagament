import {useDispatch} from 'react-redux';
import {getMessage, Toast} from '../../Api/APIHelpers';
import {ChangePassword} from '../../state/account';
import {toggleGlobalLoader} from '../../state/general';

export default () => {
  const dispatch = useDispatch();
  const changePassword = async ({
    currentPassword,
    newPassword,
    confirmPassword,
  }) => {
    dispatch(toggleGlobalLoader(true));
    try {
      if (currentPassword.trim() === '') {
        Toast.error('Please Enter Your Current Password');
      }
      if (newPassword.trim() === '') {
        Toast.error('Please Enter Your New Password');
      }
      if (confirmPassword.trim() === '') {
        Toast.error('Please Confirm Your New Password');
      }
      if (newPassword !== confirmPassword) {
        Toast.error('Passwords Does Not Match');
      }
      const response = await dispatch(
        ChangePassword({currentPassword, newPassword}),
      ).unwrap();
      dispatch(toggleGlobalLoader(false));
      return response;
    } catch (e) {
      dispatch(toggleGlobalLoader(false));
      Toast.error(getMessage(e));
      throw new Error(e);
    }
  };
  return {
    changePassword,
  };
};
