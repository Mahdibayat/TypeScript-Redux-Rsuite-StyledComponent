import { combineReducers } from "redux";
import siteReducer from "./site/reducer";

const rootReducer = combineReducers({
  site: siteReducer,
});

export default rootReducer;
