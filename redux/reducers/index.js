import { combineReducers } from "redux";
import component from "./component";
import lottery from "./lottery";
const reducers = combineReducers({
  component,
  lottery,
});

export default reducers;
