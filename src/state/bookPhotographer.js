import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import initial from './initial';
import {get, post} from '../Api';
import {endpoints} from '../Api/configs';
import {Toast} from '../Api/APIHelpers';
export const BookPhotographer = createAsyncThunk(
  'bookPhotographer/bookphotographer',
  async data => {
    console.log('data', data);
    try {
      let response;
      await post(endpoints.book.bookPhotographer, data, true)
        .then(res => {
          response = res;
        })
        .catch(e => {
          console.log('ERRORRRR', e);
          Toast.error(e);
          // throw new Error(e);
        });
      return response;
    } catch (error) {
      Toast.error(error);
      throw new Error(error);
    }
  },
);
export const GetMyBookings = createAsyncThunk(
  'auth/getmybookings',
  async data => {
    try {
      let response;
      await get(endpoints.book.myBookings, data)
        .then(res => {
          response = res.data;
        })
        .catch(e => {
          throw new Error(e);
        });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);
export const GetMyBookingDetail = createAsyncThunk(
  'auth/getmybookingdetail',
  async id => {
    try {
      let response;
      await get(endpoints.book.myBookingDetail + id)
        .then(res => {
          response = res.data;
        })
        .catch(e => {
          throw new Error(e);
        });
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);
export const PostReview = createAsyncThunk(
  'bookPhotographer/postreview',
  async ({bookingid, id, rating, review}) => {
    try {
      let response;
      await post(
        endpoints.book.postReview,
        {
          booking_id: bookingid,
          photographer_id: id,
          stars: rating,
          description: review,
        },
        true,
      )
        .then(res => {
          response = res;
        })
        .catch(e => {
          console.log('ERRORRRR', e);
          Toast.error(e);
          // throw new Error(e);
        });
      return response;
    } catch (error) {
      Toast.error(error);
      throw new Error(error);
    }
  },
);
export const bookSlice = createSlice({
  name: initial.bookPhotographer.name,
  initialState: initial.bookPhotographer.state,
  reducers: {},
  extraReducers: {},
});

export default bookSlice.reducer;
