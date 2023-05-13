import {useDispatch} from 'react-redux';
import {getMessage, Toast} from '../../Api/APIHelpers';
import {
  GetMyOrderDetail,
  GetMyOrders,
  GetMyRequests,
  GetPaymentLogs,
  RegisterPhotographer,
  UpdateOrderStatus,
} from '../../state/becomePhotographer';
import {toggleGlobalLoader, toggleInlineLoader} from '../../state/general';
const usePhotographer = () => {
  const dispatch = useDispatch();
  const becomePhotographer = async ({
    id,
    name,
    categories,
    images,
    userLocation,
    charges,
  }) => {
    try {
      if (name.trim() === '') {
        Toast.error('Enter Name');
        return;
        // throw new Error("Enter Pet Name");
      }

      if (!categories?.length) {
        Toast.error('Please Select Category');
        return;
        // throw new Error("Please Enter Description");
      }
      //   if (!userLocation) {
      //     Toast.error('Please Select Location');
      //     return;
      //     // throw new Error("Please Enter Description");
      //   }
      if (!images?.length) {
        Toast.error('Please Insert Images');
        return;
        // throw new Error("Please Insert Images");
      }
      if (charges.trim() === '') {
        Toast.error('Enter Charges');
        return;
        // throw new Error("Please Enter Color");
      }
      const formDataImageArray = {};
      images.map(
        (image, index) => (formDataImageArray[`images[${index}]`] = image),
      );

      const formDataCategoryArray = {};
      categories.map(
        (item, index) =>
          (formDataCategoryArray[`category_ids[${index}]`] = item),
      );
      console.log('in usePOST Photographer====>>>>>>>');
      const response = await dispatch(
        RegisterPhotographer({
          name,
          role: 'photographer',
          ...formDataImageArray,
          ...formDataCategoryArray,
          address: 'Abcd',
          charges,
          latitude: '43.652255',
          longitude: '-79.383186',
          user_id: id,
        }),
      ).unwrap();
      return response;
    } catch (error) {
      Toast.error(error);
      throw new Error(error);
    }
  };
  const getMyOrders = async data => {
    dispatch(toggleInlineLoader(true));
    try {
      const response = await dispatch(GetMyOrders(data)).unwrap();
      dispatch(toggleInlineLoader(false));
      return response;
    } catch (error) {
      dispatch(toggleInlineLoader(false));
      Toast.error(error);
      // throw new Error(error);
    }
  };

  const updateOrderStatus = async data => {
    dispatch(toggleGlobalLoader(true));
    try {
      const response = await dispatch(UpdateOrderStatus(data)).unwrap();
      dispatch(toggleGlobalLoader(false));
      return response;
    } catch (e) {
      dispatch(toggleGlobalLoader(false));
      Toast.error(getMessage(e));
      throw new Error(getMessage(e));
    }
  };

  const getMyOrderDetail = async id => {
    try {
      const response = await dispatch(GetMyOrderDetail(id)).unwrap();
      return response;
    } catch (error) {
      Toast.error(error);
      // throw new Error(error);
    }
  };

  const getPaymentLogs = async data => {
    dispatch(toggleInlineLoader(true));
    try {
      const response = await dispatch(GetPaymentLogs(data)).unwrap();
      dispatch(toggleInlineLoader(false));
      return response;
    } catch (error) {
      dispatch(toggleInlineLoader(false));
      Toast.error(error);
      // throw new Error(error);
    }
  };

  const getMyRequests = async data => {
    dispatch(toggleInlineLoader(true));
    try {
      const response = await dispatch(GetMyRequests(data)).unwrap();
      dispatch(toggleInlineLoader(false));
      return response;
    } catch (error) {
      dispatch(toggleInlineLoader(false));
      Toast.error(error);
      // throw new Error(error);
    }
  };

  return {
    becomePhotographer,
    getMyOrders,
    getMyOrderDetail,
    getPaymentLogs,
    getMyRequests,
    updateOrderStatus,
  };
};

export default usePhotographer;
