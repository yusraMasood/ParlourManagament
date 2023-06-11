import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import initial from './initial';
import {get, post} from '../Api';
import {endpoints} from '../Api/configs';
import {Toast} from '../Api/APIHelpers';
import {useSelector} from 'react-redux';
export const GetProfile = createAsyncThunk('account/getprofile', async () => {
  try {
    let response;
    await get(endpoints.account.profile)
      .then(res => {
        response = res;
      })
      .catch(e => {
        // throw new Error(e);
        Toast.errore(e);
      });

    return response;
  } catch (error) {
    // throw new Error(error);
    Toast.error(error);
  }
});
export const EditProfile = createAsyncThunk(
  'account/editprofile',
  async (data, {dispatch}) => {
    console.log('data', data);
    try {
      let response;
      await post(endpoints.account.update, data, true)
        .then(res => {
          response = res;
          dispatch(GetProfile());
        })
        .catch(e => {
          throw new Error(e);
        });

      return response;
    } catch (error) {
      console.warn(error);
      throw new Error(error);
    }
  },
);
export const ChangePassword = createAsyncThunk(
  'account/changepassword',
  async ({currentPassword, newPassword}) => {
    try {
      let response;
      await post(
        endpoints.account.changePassword,
        {
          current_password: currentPassword,
          password: newPassword,
          password_confirmation: newPassword,
        },
        true,
      )
        .then(res => {
          response = res;
        })
        .catch(e => {
          Toast.error(e);
          throw new Error(e);
        });

      return response;
    } catch (error) {
      Toast.error(error);
      throw new Error(error);
    }
  },
);
export const ContactUs = createAsyncThunk(
  'account/contactus',
  async ({email, name, subject, message}) => {
    try {
      let response;
      await post(
        endpoints.miscellaneous.contactUs,
        {
          email,
          full_name: name,
          subject,
          message,
          user_role: 'user',
        },
        true,
      )
        .then(res => {
          response = res;
        })
        .catch(e => {
          Toast.error(e);
          throw new Error(e);
        });

      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);

export const accountSlice = createSlice({
  name: initial.account.name,
  initialState: initial.account.state,
  reducers: {
    saveCredentials: (state, action) => {
      state.credentials = action.payload;
    },
  },
  extraReducers: {
    [GetProfile.fulfilled]: (state, action) => {
      const {payload} = action;
      state.profile = payload?.detail;
    },
  },
});
export const useCredentials = () => {
  const userCredentials = useSelector(state => state.account.credentials);
  return userCredentials;
};
export const {saveCredentials} = accountSlice.actions;
export default accountSlice.reducer;
