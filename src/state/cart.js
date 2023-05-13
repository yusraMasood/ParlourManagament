import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import initial from "./initial";
import { deleteRequest, get, post } from "../Api";
import { endpoints } from "../Api/configs";
import { Toast } from "../Api/APIHelpers";

export const AddToCart = createAsyncThunk("cart/addtocart", async data => {
  try {
    let response;
    await post(endpoints.cart.add, data, true)
      .then(res => {
        response = res;
      })
      .catch(e => {
        Toast.error(e);
        // throw new Error(e);
      });
    return response;
  } catch (error) {
    Toast.error(error);
    // throw new Error(error);
  }
});

export const RemoveFromCart = createAsyncThunk(
  "cart/removefromcart",
  async ({ id }) => {
    try {
      let response;
      await deleteRequest(endpoints.cart.remove(id))
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

export const GetCart = createAsyncThunk("cart/getcart", async () => {
  try {
    let response;
    await get(endpoints.cart.get)
      .then(res => {
        response = res?.detail;
      })
      .catch(e => {
        throw new Error(e);
      });
    return response;
  } catch (error) {
    throw new Error(error);
  }
});

export const cartSlice = createSlice({
  name: initial.cart.name,
  initialState: initial.cart.state,
  reducers: {},
  extraReducers: {
    [GetCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export default cartSlice.reducer;

export const selectCart = state => state.cart.cart;
