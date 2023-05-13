import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import thunk from 'redux-thunk';
// import account from './account';
import auth from './auth';
// import cart from './cart';
import general from './general';
// import miscellaneous from './miscellaneous';
// import categories from './categories';
// import wishlist from './wishlist';
const persistedConfig = {
  key: 'gilbert-jenkins',
  storage: AsyncStorage,
};
const reducers = combineReducers({
  general: general,
  auth: auth,
  // account: account,
  // categories: categories,
  // miscellaneous: miscellaneous,
  // cart: cart,
  // wishlist: wishlist,
});
const persistedReducer = persistReducer(persistedConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({ serializableCheck: false}).concat([thunk]);
  },
  devTools: process.env.NODE_ENV !== 'production',
});
export const persistor = persistStore(store);
