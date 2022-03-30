import { ActionType } from "./../../scripts/interfaces";
import { GET_ALL_TOKENS } from "./actionTypes";

const INIT_STATE = {
  tokens: [],
  loading: true,
};

const tokensReducer = (state = INIT_STATE, action: ActionType) => {
  switch (action.type) {
    case GET_ALL_TOKENS:
      return {
        ...state,
        tokens: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default tokensReducer;
