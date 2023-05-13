import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// import initial from "./initial";
import {get, post} from '../Api';
import {endpoints} from '../Api/configs';
import {Toast} from '../Api/APIHelpers';
import {GetProfile} from './account';
export const RegisterPhotographer = createAsyncThunk(
  'photographer/registerphotographer',
  async (data, {dispatch}) => {
    try {
      console.log('DATAAAAA', data);
      let response;
      await post(endpoints.photographer.becomePhotographer, data, true)
        .then(res => {
          response = res;
          dispatch(GetProfile());
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
export const GetMyOrders = createAsyncThunk('auth/getmyorders', async data => {
  try {
    let response;
    await get(endpoints.photographer.orders, data)
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
});
export const GetMyOrderDetail = createAsyncThunk(
  'auth/getmyorderdetail',
  async id => {
    try {
      let response;
      await get(endpoints.photographer.orderDetail + id)
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
export const GetPaymentLogs = createAsyncThunk(
  'auth/getpaymentlogs',
  async data => {
    try {
      let response;
      await get(endpoints.photographer.paymentlogs, data)
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
export const GetMyRequests = createAsyncThunk(
  'auth/getmyrequests',
  async data => {
    try {
      let response;
      await get(endpoints.photographer.myRequests, data)
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
export const UpdateOrderStatus = createAsyncThunk(
  'auth/updateorderstatus',
  async data => {
    try {
      let response;
      await post(endpoints.photographer.updateOrderStatus, data, true)
        .then(res => {
          response = res.message;
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
// export const donationSlice = createSlice({
//   name: initial.donation.name,
//   initialState: initial.donation.state,
//   reducers: {},
//   extraReducers: {},
// });

// export default donationSlice.reducer;
