import { combineReducers } from "redux";
import { alert } from "./alter.reducers";
import {productInfo} from './productInfo.reducer'

export const rootReducer = combineReducers({
  alert,
  productInfo,
});
