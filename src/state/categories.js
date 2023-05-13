import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {get} from '../Api';
import {endpoints} from '../Api/configs';
import initial from './initial';

export const GetHomeData = createAsyncThunk('auth/gethomedata', async data => {
  try {
    let response;
    await get(endpoints.category.home, data)
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
});

export const GetCategories = createAsyncThunk(
  'auth/getcategories',
  async () => {
    try {
      let response;
      await get(endpoints.category.categories)
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

export const GetPhotographers = createAsyncThunk(
  'auth/getphotographers',
  async data => {
    try {
      let response;
      await get(endpoints.category.photographersByCategory, data)
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

export const GetCategoryDetail = createAsyncThunk(
  'auth/getcategorybyid',
  async data => {
    try {
      let response;
      await get(endpoints.category.categoryById + data?.ID, data?.params)
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

export const GetPopularPhotographers = createAsyncThunk(
  'auth/getpopularphotographers',
  async () => {
    try {
      let response;
      await get(endpoints.category.popularPhotographers)
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

export const GetServiceProviders = createAsyncThunk(
  'auth/getserviceproviders',
  async () => {
    try {
      let response;
      await get(endpoints.category.serviceProviders)
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

export const GetServiceProviderById = createAsyncThunk(
  'auth/getserviceproviderbyid',
  async id => {
    try {
      let response;
      await get(endpoints.category.serviceProviderById + id)
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

export const categoriesSlice = createSlice({
  name: initial.category.name,
  initialState: initial.category.state,
  reducers: {
    setPhotographerCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
  extraReducers: {},
});

export const {setPhotographerCategories} = categoriesSlice.actions;
export default categoriesSlice.reducer;
export const selectPhotographerCategories = state =>
  state.categories.categories;
