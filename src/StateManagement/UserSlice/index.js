import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Api from '../../Api';
import {endpoints} from '../../Api/configs';
import {getMessage, showToast} from '../../Api/HelperFunction';
import {hideLoader, showLoader} from '../GeneralSlice';

// LOGIN USER THUNK
export const LoginUser = createAsyncThunk(
  'user/loginuser',
  async (body, {dispatch}) => {
    dispatch(showLoader());
    try {
      let response;
      await Api.post(endpoints.auth.login, body, false)
        .then(res => {
          response = res;
          dispatch(hideLoader());
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
export const LogoutUser = createAsyncThunk(
  'user/logout',
  async (body, {dispatch}) => {
    dispatch(showLoader());
    try {
      let response;
      await Api.post(endpoints.auth.logout, body, false)
        .then(res => {
          response = res;
          dispatch(hideLoader());
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
// REGISTER USER THUNK
export const RegisterUser = createAsyncThunk(
  'user/registeruser',
  async (data, {dispatch}) => {
    console.log('DATA ', data);
    dispatch(showLoader());
    try {
      let response;
      await Api.post(endpoints.auth.signup, data)
        .then(res => {
          dispatch(hideLoader());
          showToast(getMessage(res));
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
// FORGOT PASSWORD THUNK
export const SendForgotPasswordEmail = createAsyncThunk(
  'user/recoverpassword',
  async (data, {dispatch}) => {
    dispatch(showLoader());
    try {
      let response;
      await Api.post(endpoints.auth.recoverPassword, data)
        .then(res => {
          console.log('RESPONSE', res);
          response = res;
          showToast(getMessage(res));

          dispatch(hideLoader());
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
      throw new Error(error);
    }
  },
);
// // VERIFY OTP CODE THUNK
export const VerifyCode = createAsyncThunk(
  'user/verifycode',
  async (body, {dispatch}) => {
    console.log('function starts');
    dispatch(showLoader());
    try {
      let response;
      await Api.post(endpoints.auth.verifyCode, body, false)
        .then(res => {
          console.log('resssss=====', res);
          response = res;
          showToast(getMessage(res));
          dispatch(hideLoader());
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
      throw new Error(error);
    }
  },
);
// // RESET PASSWORD THUNK
export const ResetPasswordUser = createAsyncThunk(
  'user/resetpassword',
  async (body, {dispatch}) => {
    dispatch(showLoader());
    try {
      let response;
      await Api.post(endpoints.auth.resetPassword, body, false)
        .then(res => {
          response = res;
          showToast(getMessage(res));
          dispatch(hideLoader());
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
      throw new Error(error);
    }
  },
);
export const UpdateProfile = createAsyncThunk(
  'user/updateprofile',
  async (data, {dispatch}) => {
    dispatch(showLoader());

    try {
      let response;
      await Api.post(endpoints.auth.updateProfile, data, true)
        .then(res => {
          response = res;
          showToast(getMessage(res));
          dispatch(GetProfile());
          dispatch(hideLoader());
        })
        .catch(e => {
          dispatch(hideLoader());
          showToast(getMessage(e));
          // setTimeout(() => {
          //   showToast(getMessage(e));
          // }, 500);
          throw new Error(e);
        });

      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);
export const GetProfile = createAsyncThunk(
  'user/getprofile',
  async (data, {dispatch}) => {
    console.log('function called again get profile');
    dispatch(showLoader());

    try {
      let response;
      await Api.get(endpoints.auth.getProfile)
        .then(res => {
          response = res;
          // showToast(getMessage(res));
          dispatch(hideLoader());
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
      throw new Error(error);
    }
  },
);
export const ChangePassword = createAsyncThunk(
  'user/changepassword',
  async (data, {dispatch}) => {
    try {
      let response;
      await Api.post(endpoints.auth.changePassword, data, false)
        .then(res => {
          response = res;
          showToast(getMessage(res));
          dispatch(hideLoader());
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
      throw new Error(error);
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: state => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: {
    [LoginUser.fulfilled]: (state, {payload}) => {
      state.user = payload.user;
      state.token = payload.token;

      // state.loading = false;
    },
    [GetProfile.fulfilled]: (state, {payload}) => {
      // console.log("payload", payload);
      const tempObj = {...state.user};
      tempObj.user = payload.detail;
      state.user = tempObj;
    },
    [LogoutUser.fulfilled]: (state, {payload}) => {
      state.user = null;
      state.token = null;
    },
    [LoginUser.rejected]: state => {
      // state.loading = 'failed';
      // console.error('FAILED');
    },
  },
});

export const {login, logout} = userSlice.actions;

export const selectUser = state => state.user.token;

export default userSlice.reducer;
