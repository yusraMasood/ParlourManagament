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

export const AddWorkoutApi = createAsyncThunk(
  'workout/addWorkout',
  async (body, {dispatch}) => {
    try {
      dispatch(showLoader());
      let response;
      await Api.post(endpoints.workout.addWorkout, body, false)
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
export const workoutDone = createAsyncThunk(
  'workout/workoutDone',
  async (body, {dispatch}) => {
    try {
      dispatch(showLoader());
      let response;
      await Api.post(endpoints.workout.doneWorkout, body, false)
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
export const EditWorkoutApi = createAsyncThunk(
  'workout/editWorkout',
  async (body, {dispatch}) => {
    try {
      dispatch(showLoader());
      let response;
      await Api.post(`${endpoints.workout.editWorkout}/${body.id}`, body, false)
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

// export const getWeightStat = createAsyncThunk(
//   'workout/getWorkout',
//   async (body, {dispatch}) => {
//     dispatch(showLoader());
//     try {
//       let response;
//       await Api.get(endpoints.workout.statWeight)
//         .then(res => {
//           console.log('in workout');
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
export const getWeightStat = createAsyncThunk(
  'workout/weightstat',
  async (body, {dispatch}) => {
    try {
      // dispatch(showLoader());
      let response;
      await Api.get(endpoints.workout.statWeight)
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
export const AddWorkoutToday = createAsyncThunk(
  'workout/todayWorkout',
  async (body, {dispatch}) => {
    try {
      dispatch(showLoader());
      let response;
      await Api.post(endpoints.workout.exercise, body, false)
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
  name: 'workout',
  initialState: {
    data: null,
  },
  reducers: {},
  extraReducers: {},
});

export default waterSlice.reducer;
