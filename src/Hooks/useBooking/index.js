import {useDispatch} from 'react-redux';
import {getMessage, Toast} from '../../Api/APIHelpers';
import {
  BookPhotographer,
  GetGetSalonDetail,
  GetMyBooking,
  GetMyBookingDetail,
  GetMyBookings,
  GetNearestSalons,
  GetServices,
  PostReview,
} from '../../state/bookPhotographer';
import {toggleGlobalLoader, toggleInlineLoader} from '../../state/general';

const useBooking = () => {
  const dispatch = useDispatch();
  const bookSalon = async data => {
    // dispatch(toggleGlobalLoader(true));
    try {
      var bookData = {
        photographer_id: data?.id,
        from_date: data?.fromDate,
        to_date: data?.toDate,
        additional_notes: data?.notes,
        card_holder_name: data?.cardholderName,
        card_number: data?.cardNumber,
        exp_month_year: data?.expiryDate,
        cvv_code: data?.cvv,
        amount: data?.charges.toString(),
      };
      const response = await dispatch(BookPhotographer(bookData)).unwrap();
      // dispatch(toggleGlobalLoader(false));
      return response;
    } catch (error) {
      console.log('bookdata', error);
      // dispatch(toggleGlobalLoader(false));
      Toast.error(error);
      // throw new Error(error);
    }
  };
  const getMyBooking = async () => {
    // dispatch(toggleInlineLoader(true));
    try {
      const response = await dispatch(GetMyBooking()).unwrap();
      // dispatch(toggleInlineLoader(false));
      return response;
    } catch (error) {
      // dispatch(toggleInlineLoader(false));
      Toast.error(error);
      // throw new Error(error);
    }
  };
  const getServices = async () => {
    // dispatch(toggleInlineLoader(true));
    try {
      const response = await dispatch(GetServices()).unwrap();
      // dispatch(toggleInlineLoader(false));
      return response;
    } catch (error) {
      // dispatch(toggleInlineLoader(false));
      Toast.error(error);
      // throw new Error(error);
    }
  };
  const getNearestSalons = async (data) => {
    // dispatch(toggleInlineLoader(true));
    try {
      const response = await dispatch(GetNearestSalons(data)).unwrap();
      // dispatch(toggleInlineLoader(false));
      return response;
    } catch (error) {
      // dispatch(toggleInlineLoader(false));
      Toast.error(error);
      // throw new Error(error);
    }
  };
  const getSalonDetail = async id => {
    // dispatch(toggleGlobalLoader(true));
    try {
      const response = await dispatch(GetGetSalonDetail(id)).unwrap();
      // dispatch(toggleGlobalLoader(false));
      return response;
    } catch (error) {
      // dispatch(toggleGlobalLoader(false));
      Toast.error(error);
      // throw new Error(error);
    }
  };
  const postReview = async ({bookingid, id, rating, review}) => {
    console.log('id, rating, review', bookingid, id, rating, review);
    dispatch(toggleGlobalLoader(true));
    try {
      if (rating < 0) {
        Toast.error('Please give some rating.');
        throw new Error('Please give some rating.');
      }
      if (review.trim() === '') {
        Toast.error('Please add review.');
        throw new Error('Please add review.');
      }
      const response = await dispatch(
        PostReview({bookingid, id, rating, review}),
      ).unwrap();
      dispatch(toggleGlobalLoader(false));
      return response;
    } catch (e) {
      dispatch(toggleGlobalLoader(false));
      Toast.error(getMessage(e));
      throw new Error(getMessage(e));
    }
  };
  return {
    bookSalon,
    postReview,
    getServices,
    getNearestSalons,
    getSalonDetail,
    getMyBooking,
  };
};

export default useBooking;
