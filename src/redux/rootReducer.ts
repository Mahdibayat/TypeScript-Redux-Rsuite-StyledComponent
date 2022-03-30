import { combineReducers } from "redux";
import siteReducer from "./site/reducer";
import tokensReducer from "./tokens/reducer";

const rootReducer = combineReducers({
  site: siteReducer,
  tokens: tokensReducer,
});

export default rootReducer;
