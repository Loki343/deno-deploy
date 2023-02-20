import { Product } from "@/utils/types";
import { GET_PRODUCT, PRODUCT_ERROR, PRODUCT_LOADING } from "./product.types";

interface ProductState {
  loading: boolean;
  error: boolean;
  product: Product[];
}

interface ProductAction {
  type: string;
  payload?: any;
}

const initialState = {
  loading: false,
  error: false,
  product: [],
};

export const reducer = (
  state: ProductState = initialState,
  { type, payload }: ProductAction
) => {
  switch (type) {
    case PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_PRODUCT: {
      return {
        ...state,
        loading: false,
        error: false,
        product: payload,
      };
    }
    case PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};
