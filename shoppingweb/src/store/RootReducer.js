import { combineReducers } from "redux";
import { cartSlice } from "./cart/cartSlice";
import { LayoutSlices } from "./layouts/layout";
import { productSlice } from "./product/productSlice";
import { commonSlices } from "./common/commonSlice";
import { persistReducer } from "redux-persist";
import { AuthSlice } from "./auth/authSlice";
import { orderSlice } from "./orders/ordersSlice";
import { wishListSlice } from "./wishlist/wishlistSlice";
import storage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/lib/storage/session";

const authPersistConfig = {
  key: "auth",
  storage: sessionStorage, // use Session Storage here
};
const layoutPersistConfig = {
  key: "ecommerceLayout",
  storage: storage,
};
const productPersistConfig = {
  key: "ecommerceProductList",
  storage: sessionStorage,
};
export const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, AuthSlice.reducer),
  layout: persistReducer(layoutPersistConfig, LayoutSlices.reducer),
  common: commonSlices.reducer,
  cart: cartSlice.reducer,
  product: persistReducer(productPersistConfig, productSlice.reducer),
  wishlist: wishListSlice.reducer,
  order: orderSlice.reducer,
  // product: productSlice.reducer,
  // auth: AuthSlice.reducer,
});
