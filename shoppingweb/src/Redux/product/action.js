import { getRequest } from "../common/crud";
import { productSlice } from "./productSlice";
import { endCall, startCall } from "../common/commonSlice";

const { actions } = productSlice;

export const getProductList = () => (dispatch) => {
  dispatch(startCall({}));
  return getRequest(`https://dummyjson.com/products`)
    .then((response) => {
      if (response.status === 200) {
        console.log("API Called Successfully", response.data);
        dispatch(actions.productList(response.data.products));
        dispatch(endCall({}));
        return response;
      }
      return response;
    })
    .catch((e) => {
      dispatch(endCall({}));
      console.log(e);
    });
};

export const ITEM_PER_Page = 12;
export const getAllProducts = (page) => (dispatch) => {
  return getRequest(
    `https://dummyjson.com/products?limit=${ITEM_PER_Page}&skip=${
      (page - 1) * 12
    }`
  )
    .then((response) => {
      if (response.status === 200) {
        console.log("All Products Called Successfully", response.data);
        return response;
      }
      return response;
    })
    .catch((e) => {
      console.log(e);
    });
};
