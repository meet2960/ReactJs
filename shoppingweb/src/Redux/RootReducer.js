import { combineReducers } from "redux";
import { cartSlice } from "./cart/cartSlice";
import { LayoutSlices } from "./layouts/layout";
import { productSlice } from "./product/productSlice";
import { commonSlices } from "./common/commonSlice";
import { persistReducer } from "redux-persist";
import { AuthSlice } from "./auth/authSlice";
import storage from "redux-persist/lib/storage";

const layoutPersistConfig = {
  key: "ecommerceLayout",
  storage: storage,
};
export const rootReducer = combineReducers({
  layout: persistReducer(layoutPersistConfig, LayoutSlices.reducer),
  common: commonSlices.reducer,
  cart: cartSlice.reducer,
  product: productSlice.reducer,
  auth: AuthSlice.reducer,
});
