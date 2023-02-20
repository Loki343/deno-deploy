import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { reducer as cartReducer } from "./cart/cart.reducer";
import { reducer as productReducer } from "./product/product.reducer";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

const rootReducer = combineReducers({
  productManager: productReducer,
  cartManager: cartReducer,
});

export const store = legacy_createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DisppatchFn = () => AppDispatch;
export const useAppDispatch: DisppatchFn = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
