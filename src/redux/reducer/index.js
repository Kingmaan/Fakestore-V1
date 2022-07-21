import { combineReducers } from "redux";
import { productReducer, selectedProducts} from "./productReducer";

const reducers = combineReducers({
  setAllProducts: productReducer,
  setProduct: selectedProducts,
});

export default reducers;