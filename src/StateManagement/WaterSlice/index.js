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

export const AddWaterIntake = createAsyncThunk(
  'water/addIntake',
  async (body, {dispatch}) => {
    try {
      dispatch(showLoader());
      let response;
      await Api.post(endpoints.water.addWaterIntake, body, false)
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
export const EditWaterIntake = createAsyncThunk(
  'water/editWater',
  async (body, {dispatch}) => {
    try {
      dispatch(showLoader());
      let response;
      await Api.post(`${endpoints.water.editWater}/${body.id}`, body, false)
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

export const getWaterLogs = createAsyncThunk(
  'water/waterLogs',
  async (body, {dispatch}) => {
    try {
      dispatch(showLoader());
      let response;
      await Api.get(`${endpoints.water.waterStats}?yearly=${body.yearly}`)
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

export const addWaterDrank = createAsyncThunk(
  'water/addWaterDrank',
  async (body, {dispatch}) => {
    try {
      dispatch(showLoader());
      let response;
      await Api.post(endpoints.water.waterDrank, body, false)
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

export const waterSlice = createSlice({
  name: 'water',
  initialState: {
    // data: null,
  },
  reducers: {},
  extraReducers: {
    // [getAllOrders.fulfilled]: (state, {payload}) => {
    //   state.data = payload;
    // },
  },
});

// export const selectHomeData = state => state;
// export const selectShop = state => state.home.shop;
// export const selectCategories = state => state.home.categories;
// export const selectNotificationData = state => state.home.notification;

export default waterSlice.reducer;
