import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import initial from './initial';
import {get} from '../Api';
import {endpoints} from '../Api/configs';

export const GetGeneralData = createAsyncThunk(
  'auth/getgeneraldata',
  async () => {
    try {
      let response;
      await get(endpoints.miscellaneous.contents)
        .then(res => {
          response = res.data;
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

export const miscellaneousSlice = createSlice({
  name: initial.miscellaneous.name,
  initialState: initial.miscellaneous.state,
  reducers: {},
  extraReducers: {
    [GetGeneralData.fulfilled]: (state, action) => {
      const about_us = action.payload[4];
      state.aboutUs = about_us;
    },
  },
});

export default miscellaneousSlice.reducer;
