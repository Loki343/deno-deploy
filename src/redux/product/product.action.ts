import { AppDispatch } from "../store";
import { getProductsAPI } from "./product.api";
import { GET_PRODUCT, PRODUCT_ERROR, PRODUCT_LOADING } from "./product.types";

export const getProducts = (): any => async (dispatch: AppDispatch) => {
  dispatch({ type: PRODUCT_LOADING });
  try {
    let data = await getProductsAPI();
    dispatch({ type: GET_PRODUCT, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_ERROR });
  }
};
