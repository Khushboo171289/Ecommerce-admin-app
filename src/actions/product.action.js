import axios from "../helpers/axios";
import { productConstants } from "./constants";

export const addProduct = (form) => {
    return async (dispatch) => {
      try {
        dispatch({ type: productConstants.ADD_PRODUCT_REQUEST });
        const res = await axios.post(`product/create`, form);
        if (res.status === 201) {
          dispatch({ type: productConstants.ADD_PRODUCT_SUCCESS });
          //dispatch(getProducts());
        } else {
          dispatch({ type: productConstants.ADD_PRODUCT_FAILURE });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };