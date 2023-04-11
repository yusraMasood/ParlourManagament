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

export const GetOnlineSessions = createAsyncThunk(
  'onlineSessions',
  async (data, {dispatch}) => {
    try {
      dispatch(showLoader());
      let response;
      await Api.get(endpoints.session.sessions)
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
export const GetPurchasedSessionsByDate = createAsyncThunk(
  'purchasedSessionByDate',
  async (data, {dispatch}) => {
    try {
      // dispatch(showLoader());
      let response;
      // console.log('DATE TUNE', data.date);
      await Api.get(`${endpoints.session.purchasedSession}/${data?.date}`)
        .then(res => {
          // console.warn(res);
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
export const PostOnlinePayment = createAsyncThunk(
  'onlineSessionsPayment',
  async (body, {dispatch}) => {
    // console.log("function starts");
    try {
      dispatch(showLoader());
      let response;
      await Api.post(`${endpoints.session.payment}/${body.id}`, body, false)
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
export const GetOnlineSessionById = createAsyncThunk(
  'onlineSessionsById',
  async (data, {dispatch}) => {
    try {
      dispatch(showLoader());
      let response;
      await Api.get(`${endpoints.session.sessionById}/${data.id}`)
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

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    // data: null,
  },
  reducers: {},
  //   extraReducers: {
  //     [GetHome.fulfilled]: (state, {payload}) => {
  //       state.data = payload;
  //     },
  //   },
});

// export const selectHomeData = state => state;
// export const selectShop = state => state.home.shop;
// export const selectCategories = state => state.home.categories;
// export const selectNotificationData = state => state.home.notification;

export default sessionSlice.reducer;
