import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import initial from './initial';
import {get} from '../Api';
import {endpoints} from '../Api/configs';

export const GetNotifications = createAsyncThunk(
  'notification/getnotifications',
  async data => {
    try {
      let response;
      await get(endpoints.notifications.get, data)
        .then(res => {
          response = res?.data;
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

export const notificationSlice = createSlice({
  name: initial.notification.name,
  initialState: initial.notification.state,
  reducers: {},
  extraReducers: {},
});

export default notificationSlice.reducer;
