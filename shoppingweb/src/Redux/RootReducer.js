import { combineReducers } from "redux";
import { cartSlice } from "./cart/cartSlice";
import { LayoutSlices } from "./layouts/layout";
import { productSlice } from "./product/productSlice";
import { commonSlices } from "./common/commonSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const layoutPersistConfig = {
  key: "ecommerceLayout",
  storage: storage,
};
export const rootReducer = combineReducers({
  common: commonSlices.reducer,
  layout: persistReducer(layoutPersistConfig, LayoutSlices.reducer),
  cart: cartSlice.reducer,
  product: productSlice.reducer,
});