import {getRequest} from "../../utils/crud";
import {productSlice} from "./productSlice";

const {actions} = productSlice;
export const getProductList = () => (dispatch) => {
    return getRequest(`https://dummyjson.com/products`)
        .then((response) => {
            if (response.status === 200) {
                console.log("API Called Successfully", response);
                dispatch(actions.productList(response.data.products));
                return response;
            }
            return response;
        })
        .catch((e) => {
            console.log(e);
        });
};