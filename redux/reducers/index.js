import { combineReducers } from "redux";
import component from "./component";
import lotto from "./lotto";
const reducers = combineReducers({
  component,
  lotto,
});

export default reducers;
