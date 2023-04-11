import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    softLoader: false,
    loader: false,
  },
  reducers: {
    showLoader: state => {
      state.loader = true;
    },
    hideLoader: state => {
      state.loader = false;
    },
    showSoftLoader: state => {
      state.softLoader = true;
    },
    hiderSoftLoader: state => {
      state.softLoader = false;
    },
  },
});

export const {showLoader, hideLoader, showSoftLoader, hiderSoftLoader} =
  loaderSlice.actions;

export const selectLoader = state => state.general.loader;
export const selectSoftLoader = state => state.general.softLoader;

export default loaderSlice.reducer;