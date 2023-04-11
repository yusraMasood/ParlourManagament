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
import {GetProfile, userSlice} from '../UserSlice';

// LOGIN USER THUNK
export const GetHome = createAsyncThunk('home', async (data, {dispatch}) => {
  // setTimeout(()=>{
  dispatch(showLoader());
  // },5000)
  try {
    let response;
    await Api.get(endpoints.general.home)
      .then(res => {
        dispatch(hideLoader());
        // dispatch(GetProfile());
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
});
export const GetAllProducts = createAsyncThunk(
  'home/products',
  async (param, {dispatch}) => {
    dispatch(showLoader());
    try {
      let response;
      await Api.get(endpoints.general.products, param)
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

export const GetProductById = createAsyncThunk(
  'home/productId',
  async (data, {dispatch}) => {
    dispatch(showLoader());
    try {
      let response;
      await Api.get(`${endpoints.general.productId}/${data}`)
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
export const postAddToCart = createAsyncThunk(
  'home/addCart',
  async (data, {dispatch}) => {
    try {
      // dispatch(showLoader());
      let response;
      await Api.post(endpoints.general.addCart, data, false)
        .then(res => {
          response = res;
          showToast(getMessage(res));
          // dispatch(GetProfile());
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
export const postEditCart = createAsyncThunk(
  'home/editCart',
  async (data, {dispatch}) => {
    try {
      dispatch(showLoader());

      let response;
      await Api.post(endpoints.general.editCart, data, false, data.id)
        .then(res => {
          response = res;
          showToast(getMessage(res));
          // dispatch(GetProfile());
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
export const GetContactUs = createAsyncThunk(
  'home/contactUs',
  async (data, {dispatch}) => {
    dispatch(showLoader());

    try {
      let response;
      await Api.post(endpoints.general.contactUs, data, false)
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
export const deleteCart = createAsyncThunk(
  'home/deleteCart',
  async (data, {dispatch}) => {
    dispatch(showLoader());

    try {
      let response;
      await Api.delete(`${endpoints.general.deleteCart}/${data}`)
        .then(res => {
          response = res;
          showToast(getMessage(res));
          // getCartItems();
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
export const GetPrivacyPolicy = createAsyncThunk(
  'user/getPrivacyPolicy',
  async (data, {dispatch}) => {
    dispatch(showLoader());
    try {
      let response;
      await Api.get(endpoints.general.privacy)
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
export const GetAllVideos = createAsyncThunk(
  'home/getAllVideos',
  async (data, {dispatch}) => {
    dispatch(showLoader());
    try {
      let response;
      await Api.get(endpoints.video.videos)
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
export const getAllSubscriptions = createAsyncThunk(
  'home/allSubscription',
  async (data, {dispatch}) => {
    dispatch(showLoader());
    try {
      let response;
      await Api.get(endpoints.subscription.log)
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
export const MealPlanNormal = createAsyncThunk(
  'home/normalMeal',
  async (data, {dispatch}) => {
    dispatch(showLoader());
    try {
      let response;
      await Api.get(endpoints.subscription.mealPlan)
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

export const mealPlanDetails = createAsyncThunk(
  'home/normalMeal',
  async (data, {dispatch}) => {
    // dispatch(showLoader());
    try {
      let response;
      await Api.get(`${endpoints.general.mealPlanDetails}/${data.date}`)
        .then(res => {
          response = res;
          // showToast(getMessage(res));
          // dispatch(hideLoader());
        })
        .catch(e => {
          // dispatch(hideLoader());

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
export const postCustomizedMealPlanPurchase = createAsyncThunk(
  'home/customizePlanPurchase',
  async (data, {dispatch}) => {
    dispatch(showLoader());

    try {
      let response;
      await Api.post(
        `${endpoints.subscription.customizePurchase}/${data.customId}`,
        data,
        false,
      )
        .then(res => {
          response = res;
          // showToast(getMessage(res));
          // dispatch(GetProfile());
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
export const postMealPlanPurchase = createAsyncThunk(
  'home/mealPlanPurchase',
  async (data, {dispatch}) => {
    dispatch(showLoader());

    try {
      let response;
      await Api.post(
        `${endpoints.subscription.mealPlanPurchase}/${data.id}`,
        data,
        false,
      )
        .then(res => {
          response = res;
          // showToast(getMessage(res));
          // dispatch(GetProfile());
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
export const myMeals = createAsyncThunk(
  'home/getAllVideos',
  async (data, {dispatch}) => {
    dispatch(showLoader());
    try {
      let response;
      await Api.get(endpoints.subscription.myMeal)
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
export const getAllCustomizedPlans = createAsyncThunk(
  'home/getCustomized',
  async (data, {dispatch}) => {
    dispatch(showLoader());
    try {
      let response;
      await Api.get(endpoints.subscription.customizedPlan)
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
export const notifications = createAsyncThunk(
  'home/getAllVideos',
  async (data, {dispatch}) => {
    dispatch(showLoader());
    try {
      let response;
      await Api.get(endpoints.general.notifications)
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
export const subscribeToVideo = createAsyncThunk(
  'home/subscribeVideo',
  async (data, {dispatch}) => {
    dispatch(showLoader());

    try {
      let response;
      await Api.post(endpoints.video.subscribe, data, false)
        .then(res => {
          response = res;
          showToast(getMessage(res));
          // dispatch(GetProfile());
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
export const postCheckoutPayment = createAsyncThunk(
  'home/checkout',
  async (data, {dispatch}) => {
    dispatch(showLoader());

    try {
      let response;
      await Api.post(endpoints.general.productPayment, data, false)
        .then(res => {
          response = res;
          // showToast(getMessage(res));
          // dispatch(GetProfile());
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
export const GetTermsConditions = createAsyncThunk(
  'user/getPrivacyPolicy',
  async (data, {dispatch}) => {
    dispatch(showLoader());
    try {
      let response;
      await Api.get(endpoints.general.privacy)
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
export const getCartItems = createAsyncThunk(
  'user/getCart',
  async (data, {dispatch}) => {
    dispatch(showLoader());
    try {
      let response;
      await Api.get(endpoints.general.cart)
        .then(res => {
          response = res;
          // showToast(getMessage(res));
          dispatch(hideLoader());
        })
        .catch(e => {
          dispatch(hideLoader());

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

export const saveUserDetails = createAsyncThunk(
  'user/userCheckout',
  async (data, {dispatch}) => {
    // dispatch(showLoader())
    // try {
    //   let response;
    //   await Api.get(endpoints.general.cart)
    //     .then(res => {
    //       response = res;
    //       // showToast(getMessage(res));
    //       dispatch(hideLoader());
    //     })
    //     .catch(e => {
    //       dispatch(hideLoader());
    //       setTimeout(() => {
    //         showToast(getMessage(e));
    //       }, 500);
    //       throw new Error(e);
    //     });
    //   return response;
    // } catch (error) {
    //   throw new Error(error);
    // }
  },
);
export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    // data: null,
    cart: [],
    shipping_Details: null,
    // shop: null,
    // categories: [],
    // category: {},
    // notification: {}
  },
  reducers: {
    userShippingDetail: (state, payload) => {
      console.log('payload', payload);
      state.shipping_Details = payload.payload;
    },
  },
  extraReducers: {
    [getCartItems.fulfilled]: (state, {payload}) => {
      state.cart = payload;
    },
    [postCheckoutPayment.fulfilled]: state => {
      state.cart = [];
    },
  },
});

export const {userShippingDetail} = homeSlice.actions;
export const selectHomeData = state => state;
export const selectShop = state => state.home.shop;
export const selectCategories = state => state.home.categories;
export const selectNotificationData = state => state.home.notification;

export default homeSlice.reducer;
