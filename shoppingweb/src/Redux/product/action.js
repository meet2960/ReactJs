import { getRequest } from "../common/crud";
import { productSlice } from "./productSlice";
import { endCall, startCall } from "../common/commonSlice";

const { actions } = productSlice;

export const getProductList = () => (dispatch) => {
  dispatch(startCall({}));
  return getRequest(`https://dummyjson.com/products`)
    .then((response) => {
      if (response.status === 200) {
        console.log("API Called Successfully", response);
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