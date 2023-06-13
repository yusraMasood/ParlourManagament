import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import initial from './initial';
import {get, post} from '../Api';
import {endpoints} from '../Api/configs';
import {Toast} from '../Api/APIHelpers';
export const BookSalon = createAsyncThunk('book/bookSalon', async data => {
  console.log('data', data);
  try {
    let response;
    await post(endpoints.book.bookSalon, data, false)
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
});
export const GetMyBooking = createAsyncThunk(
  'auth/getNearestSalons',
  async () => {
    try {
      let response;
      await get(endpoints.book.booking)
        .then(res => {
          response = res;
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
export const GetServices = createAsyncThunk('auth/getServices', async () => {
  try {
    let response;
    await get(endpoints.book.services)
      .then(res => {
        response = res;
      })
      .catch(e => {
        throw new Error(e);
      });
    return response;
  } catch (error) {
    throw new Error(error);
  }
});
export const GetNearestSalons = createAsyncThunk(
  'auth/getNearestSalons',
  async data => {
    try {
      let response;
      await get(endpoints.book.nearest, data)
        .then(res => {
          response = res;
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
export const GetGetSalonDetail = createAsyncThunk(
  'auth/getSalonDetail',
  async id => {
    try {
      let response;
      await get(endpoints.book.salonDetail + id)
        .then(res => {
          response = res;
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
  async ({id, rating, comment}) => {
    try {
      let response;
      await post(endpoints.book.postReview + id, {rating, comment}, false)
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
