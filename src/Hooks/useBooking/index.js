import {useDispatch} from 'react-redux';
import {getMessage, Toast} from '../../Api/APIHelpers';
import {
  BookPhotographer,
  BookSalon,
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
  const bookSalon = async ({
    paymentType,
    from,
    to,
    date,
    serviceId,
    card_number,
    exp_month,
    exp_year,
    cvv,
  }) => {
    dispatch(toggleGlobalLoader(true));
    try {
      if (date.trim() === '') {
        throw new Error('Please Enter Appointment Date');
      }
      if (from.trim() === '') {
        throw new Error('Please Enter Your Start Time');
      }
      if (to.trim() === '') {
        throw new Error('Please Enter Your End Time');
      }
      if (paymentType === 'card') {
        if (card_number.trim() === '') {
          throw new Error('Please Enter Card Number');
        }
        if (exp_month.trim() === '') {
          throw new Error('Please Enter Expiry Month');
        }
        if (exp_year.trim() === '') {
          throw new Error('Please Enter Expiry Year');
        }
        if (cvv.trim() === '') {
          throw new Error('Please Enter CVV Number');
        }
        var bookData = {
          paymentType,
          from,
          to,
          date,
          serviceId,
          card_details: {
            card_number,
            exp_month,
            exp_year,
            cvv,
          },
        };
      } else {
        var bookData = {
          paymentType,
          from,
          to,
          date,
          serviceId,
        };
      }

      const response = await dispatch(BookSalon(bookData)).unwrap();
      dispatch(toggleGlobalLoader(false));
      Toast.success("Booked Successfully!");
      return response;
    } catch (error) {
      console.log('bookdata', error);
      dispatch(toggleGlobalLoader(false));
      Toast.error(error?.message);
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
      Toast.error(error?.message);
      // throw new Error(error);
    }
  };
  const getNearestSalons = async data => {
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
  const postReview = async ({id, rating, comment}) => {
    // console.log('id, rating, review', bookingid, id, rating, review);
    dispatch(toggleGlobalLoader(true));
    try {
      // if (rating < 0) {
      //   Toast.error('Please give some rating.');
      //   throw new Error('Please give some rating.');
      // }
      if (comment.trim() === '') {
        Toast.error('Please add review.');
        throw new Error('Please add review.');
      }
      const response = await dispatch(
        PostReview({id, rating, comment}),
      ).unwrap();
      dispatch(toggleGlobalLoader(false));
      Toast.success("Successfully posted!")
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
