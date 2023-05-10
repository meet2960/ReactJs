import { combineReducers } from "redux";
import { cartSlice } from "./cart/cartSlice";
import { LayoutSlices } from "./layouts/layout";
import { productSlice } from "./product/productSlice";
import { commonSlices } from "./common/commonSlice";

export const rootReducer = combineReducers({
  common: commonSlices.reducer,
  layout: LayoutSlices.reducer,
  cart: cartSlice.reducer,
  product: productSlice.reducer,
});