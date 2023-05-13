import {useDispatch, useSelector} from 'react-redux';

import {getMessage, Toast} from '../../Api/APIHelpers';
import {toggleInlineLoader} from '../../state/general';
import {
  AddToWishlist,
  GetWishlist,
  RemoveFromWishlist,
  selectionWishlist,
} from '../../state/wishlist';

const useWishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(selectionWishlist);
  const addWishlist = async id => {
    try {
      const response = await dispatch(AddToWishlist(id)).unwrap();
      return response;
    } catch (error) {
      Toast.error(error);
      throw new Error(error);
    }
  };

  const removeWishlist = async id => {
    try {
      const response = await dispatch(RemoveFromWishlist(id)).unwrap();
      return response;
    } catch (error) {
      console.log('ERROR', getMessage(error));
      Toast.error(error);
      throw new Error(error);
    }
  };

  const getWishlist = async data => {
    dispatch(toggleInlineLoader(true));
    try {
      const response = await dispatch(GetWishlist(data)).unwrap();
      dispatch(toggleInlineLoader(false));
      return response;
    } catch (error) {
      dispatch(toggleInlineLoader(false));
      throw new Error(error);
    }
  };

  return {wishlist, addWishlist, removeWishlist, getWishlist};
};

export default useWishlist;
