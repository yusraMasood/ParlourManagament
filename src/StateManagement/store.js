import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import GeneralSlice from './GeneralSlice';
import UserSlice from './UserSlice';
import HomeSlice from './HomeSlice';
import SessionSlice from "./SessionSlice"
import OrderSlice from './OrderSlice';
import WeightSlice from './WeightSlice';

const reducers = combineReducers({
  user: UserSlice,
  general: GeneralSlice,
  home: HomeSlice,
  session: SessionSlice,
  order: OrderSlice,
  weight: WeightSlice
});

const persistedConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['general', 'cart'],
};

const persistedReducer = persistReducer(persistedConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;