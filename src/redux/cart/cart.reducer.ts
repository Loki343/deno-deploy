import { Cart } from "@/utils/types";
import { GET_CART, CART_ERROR, CART_LOADING, ADD_TO_CART } from "./cart.types";

type CartState = {
  loading: boolean;
  error: boolean;
  cart: Cart[];
};

type CartAction = {
  type: string;
  payload?: any;
};

const initialState: CartState = {
  loading: false,
  error: false,
  cart: [],
};

export const reducer = (
  state: CartState = initialState,
  { type, payload }: CartAction
): CartState => {
  switch (type) {
    case CART_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case CART_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_CART: {
      return {
        ...state,
        loading: false,
        cart: payload,
      };
    }
    case ADD_TO_CART:{
      return{
        ...state,
        loading:false,
        cart:[...state.cart,payload]
      }
    }
    default: {
      return state;
    }
  }
};
