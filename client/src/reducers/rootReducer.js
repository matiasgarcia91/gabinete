import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productsReducer from "./cartReducer";

export default combineReducers({
  cartReducer,
  productsReducer
});
