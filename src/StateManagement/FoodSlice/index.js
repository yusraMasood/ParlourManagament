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

export const AddFoodIntakeApi = createAsyncThunk(
  'food/addFood',
  async (body, {dispatch}) => {
    try {
      dispatch(showLoader());
      let response;
      await Api.post(endpoints.food.addFoodIntake, body, false)
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
export const foodIntakeDetails = createAsyncThunk(
  'food/foodDetails',
  async (body, {dispatch}) => {
    try {
      dispatch(showLoader());
      let response;
      await Api.get(endpoints.food.foodDetails, body, false)
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
// export const setGoalApi = createAsyncThunk(
//   'weight/setGoal',
//   async (body,{dispatch}) => {
//     try {
//       dispatch(showLoader())
//       let response;
//       await Api.post(endpoints.weight.setGoal,body,false)
//         .then(res => {
//           dispatch(hideLoader());
//           response = res;
//         })
//         .catch(e => {
//           dispatch(hideLoader());
//           setTimeout(() => {
//             showToast(getMessage(e));
//           }, 500);
//           throw new Error(e);
//         });
//       return response;
//     } catch (error) {
//       dispatch(hideLoader());
//       throw new Error(error);
//     }
//   },
// );

export const foodSlice = createSlice({
  name: 'food',
  initialState: {
    data: null,
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

export default foodSlice.reducer;
