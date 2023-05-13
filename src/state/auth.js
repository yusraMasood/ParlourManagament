import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import initial from './initial';
import {get, post} from '../Api';
import {endpoints} from '../Api/configs';
import {Platform} from 'react-native';
import {useSelector} from 'react-redux';
import {Toast} from '../Api/APIHelpers';
export const Login = createAsyncThunk(
  'auth/loginuser',
  async ({email, password, deviceId}) => {
    try {
      let response;
      await post(
        endpoints.auth.login,
        {
          email,
          password,
          // role: 'user',
          // device_id: deviceId,
          // device_type: Platform.OS,
        },
        false,
      )
        .then(res => {
          response = res.token;
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
export const Register = createAsyncThunk(
  'auth/registeruser',
  async ({firstName,
    lastName,
    email,
    phone,
    password,
    confirmPassword}) => {
    try {
      let response;
      // console.log('Register dataaaa', {
      //   full_name: name,
      //   email,
      //   password,
      //   password_confirmation: password,
      //   phone_number: phone,
      //   role: 'user',
      //   image,
      // });
      await post(
        endpoints.auth.register,
        {
          "name": firstName + lastName,
          "email": email,
          "phone_number": phone,
          "long":95.43242,
          "lat":23.4543,
          "password": password,
          "password_confirmation": confirmPassword,
        },
        false,
      )
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
export const Logout = createAsyncThunk('auth/logoutuser', async () => {
  try {
    let response;
    await get(endpoints.auth.logout)
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
export const VerifyEmail = createAsyncThunk(
  'auth/verifyemail',
  async ({email}) => {
    try {
      let response;
      await post(endpoints.passwordRecovery.verifyEmail, {email}, true)
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
export const VerifyCode = createAsyncThunk(
  'auth/verifycode',
  async ({code}) => {
    try {
      let response;
      await post(endpoints.passwordRecovery.verifyCode, {code}, true)
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
export const ResetPassword = createAsyncThunk(
  'auth/resetpassword',
  async ({email, password, confirmPassword}) => {
    try {
      let response;
      await post(
        endpoints.passwordRecovery.updatePassword,
        {email, password, password_confirmation: confirmPassword},
        true,
      )
        .then(res => {
          response = res;
        })
        .catch(e => {
          Toast.error(e);
        });

      return response;
    } catch (error) {
      Toast.error(error);
    }
  },
);
export const authSlice = createSlice({
  name: initial.auth.name,
  initialState: initial.auth.state,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: {
    [Login.fulfilled]: (state, action) => {
      const {payload} = action;
      state.token = payload;
    },
    [Logout.fulfilled]: state => {
      state.token = null;
    },
    [Logout.rejected]: state => {
      state.token = null;
    },
  },
});
export const {setToken, removeToken} = authSlice.actions;
export default authSlice.reducer;
export const useToken = () => {
  const token = useSelector(state => state.auth.token);
  return token;
};
