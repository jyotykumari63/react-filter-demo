import { combineReducers } from "redux";
import { alert } from "./alter.reducers";

export const rootReducer = combineReducers({
  alert,
});
