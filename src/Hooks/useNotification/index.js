import {useDispatch} from 'react-redux';

import {Toast} from '../../Api/APIHelpers';
import {toggleInlineLoader} from '../../state/general';
import {GetNotifications} from '../../state/notification';

const useNotification = () => {
  const dispatch = useDispatch();

  const getNotifications = async data => {
    dispatch(toggleInlineLoader(true));
    try {
      const response = await dispatch(GetNotifications(data)).unwrap();
      dispatch(toggleInlineLoader(false));
      return response;
    } catch (error) {
      dispatch(toggleInlineLoader(false));
      Toast.error(error);
      throw new Error(error);
    }
  };

  return {
    getNotifications,
  };
};

export default useNotification;
