import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Api from '../../Api';
import {endpoints} from '../../Api/configs';
import {getMessage, showToast} from '../../Api/HelperFunction';
import {
  hideLoader,
  hiderSoftLoader,
  showLoader,
  showSoftLoader,
} from '../GeneralSlice';

export const getAllOrders = createAsyncThunk(
  'order/all',
  async (data, {dispatch}) => {
    try {
      dispatch(showLoader());
      let response;
      await Api.get(endpoints.order.orders)
        .then(res => {
          dispatch(hideLoader());
          response = res;
        })
        .catch(e => {
          dispatch(hideLoader());
          setTimeout(() => {
            showToast(getMessage(e));
          }, 500);
          throw new Error(e);
        });

      return response;
    } catch (error) {
      dispatch(hideLoader());
      throw new Error(error);
    }
  },
);

export const getReminderLogs = createAsyncThunk(
  'order/reminderLog',
  async (data, {dispatch}) => {
    try {
      dispatch(showLoader());
      let response;
      await Api.get(endpoints.general.reminder)
        .then(res => {
          dispatch(hideLoader());
          response = res;
        })
        .catch(e => {
          dispatch(hideLoader());
          setTimeout(() => {
            showToast(getMessage(e));
          }, 500);
          throw new Error(e);
        });

      return response;
    } catch (error) {
      dispatch(hideLoader());
      throw new Error(error);
    }
  },
);
export const postReminderOff = createAsyncThunk(
  'order/reminderOff',
  async (body, {dispatch}) => {
    // console.log("function starts");
    try {
      // dispatch(showLoader())
      let response;
      await Api.post(
        `${endpoints.general.statusReminder}/${body.id}`,
        body,
        false,
      )
        .then(res => {
          // dispatch(hideLoader());
          response = res;
        })
        .catch(e => {
          // dispatch(hideLoader());
          setTimeout(() => {
            showToast(getMessage(e));
          }, 500);
          throw new Error(e);
        });
      return response;
    } catch (error) {
      dispatch(hideLoader());
      throw new Error(error);
    }
  },
);
export const getOrderDetails = createAsyncThunk(
  'order/detail',
  async (data, {dispatch}) => {
    try {
      dispatch(showLoader());
      let response;
      await Api.get(`${endpoints.order.viewOrderDetails}/${data.id}`)
        .then(res => {
          dispatch(hideLoader());
          response = res;
        })
        .catch(e => {
          dispatch(hideLoader());
          setTimeout(() => {
            showToast(getMessage(e));
          }, 500);
          throw new Error(e);
        });

      return response;
    } catch (error) {
      dispatch(hideLoader());
      throw new Error(error);
    }
  },
);

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    data: null,
    reminderLog: null,
  },
  reducers: {},
  extraReducers: {
    [getAllOrders.fulfilled]: (state, {payload}) => {
      state.data = payload;
    },
    // [getReminderLogs.fulfilled]: (state, {payload}) => {
    //   state.reminderLog = payload;
    // },
  },
});

// export const selectHomeData = state => state;
// export const selectShop = state => state.home.shop;
// export const selectCategories = state => state.home.categories;
// export const selectNotificationData = state => state.home.notification;

export default orderSlice.reducer;
