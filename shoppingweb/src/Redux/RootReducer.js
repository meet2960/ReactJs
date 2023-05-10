import {combineReducers} from "redux";
import {cartSlice} from "./cart/cartSlice";
import {LayoutSlices} from "./layouts/layout";
import {productSlice} from "./product/productSlice";

export const rootReducer = combineReducers({
  layout: LayoutSlices.reducer,
  cart: cartSlice.reducer,
  product: productSlice.reducer,
});