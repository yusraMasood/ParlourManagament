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

export const AddWeight = createAsyncThunk(
    'weight/addWeight',
    async (body,{dispatch}) => {
      try {
        dispatch(showLoader())
        let response;
        await Api.post(endpoints.weight.addWeight,body,false)
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
  export const setGoalApi = createAsyncThunk(
    'weight/setGoal',
    async (body,{dispatch}) => {
      try {
        dispatch(showLoader())
        let response;
        await Api.post(endpoints.weight.setGoal,body,false)
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
  name: 'weight',
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