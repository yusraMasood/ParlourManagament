import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import initial from "./initial";
import { get, post } from "../Api";
import { endpoints } from "../Api/configs";

export const GetShopOrders = createAsyncThunk(
  "order/getshoporders",
  async ({ page }) => {
    try {
      let response;
      await get(endpoints.orders.getOrders, {
        page,
        per_page: 15,
        type: "product",
        "order[key]": "id",
        "order[value]": "desc",
      })
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
  },
);

export const GetShopOrderDetails = createAsyncThunk(
  "order/getshoporderdetails",
  async id => {
    try {
      let response;
      await get(endpoints.orders.orderDetail(id))
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
  },
);
export const GetPetOrders = createAsyncThunk(
  "order/getpetorders",
  async ({ page }) => {
    try {
      let response;
      await get(endpoints.orders.getOrders, {
        page,
        per_page: 15,
        type: "pet",
      })
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
  },
);

export const CreateShopOrder = createAsyncThunk(
  "order/createShopOrder",
  async data => {
    try {
      let response;
      await post(endpoints.orders.createOrder, data)
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
  },
);

export const PostReportOrder = createAsyncThunk(
  "order/postreportorder",
  async data => {
    try {
      let response;
      await post(endpoints.report.report, data)
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
  },
);

export const PostReviewProduct = createAsyncThunk(
  "order/postreviewproduct",
  async data => {
    try {
      let response;
      await post(endpoints.orders.review, data, true)
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
  },
);

export const orderSlice = createSlice({
  name: initial.order.name,
  initialState: initial.order.state,
  reducers: {},
  extraReducers: {},
});

export default orderSlice.reducer;
