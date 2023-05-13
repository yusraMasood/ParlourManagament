import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import initial from './initial';
import {get, post} from '../Api';
import {endpoints} from '../Api/configs';

export const AddToWishlist = createAsyncThunk(
  'wishlist/addtowishlist',
  async id => {
    console.log('id', id);
    try {
      let response;
      await post(endpoints.wishlist.add + id)
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

export const RemoveFromWishlist = createAsyncThunk(
  'wishlist/removefromwishlist',
  async id => {
    console.log('id', id);
    try {
      let response;
      await post(endpoints.wishlist.remove + id)
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

export const GetWishlist = createAsyncThunk(
  'wishlist/getwishlist',
  async data => {
    try {
      let response;
      await get(endpoints.wishlist.get, data)
        .then(res => {
          response = res?.data;
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

export const wishlistSlice = createSlice({
  name: initial.cart.name,
  initialState: initial.wishlist.state,
  reducers: {},
  extraReducers: {
    [GetWishlist.fulfilled]: (state, action) => {
      state.wishlist = action.payload;
    },
  },
});

export default wishlistSlice.reducer;

export const selectionWishlist = state => state.wishlist.wishlist;
