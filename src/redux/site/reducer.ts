import { ActionType } from "./../../scripts/interfaces";
import {
  CHANGE_THEME,
  TOGGLE_CONNECT_WALLET,
  TOGGLE_SETTING,
} from "./actionTypes";

const INIT_STATE = {
  theme: "dark",
  modalConnect: false,
  modalSetting: false,
};

const siteReducer = (state = INIT_STATE, action: ActionType) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case TOGGLE_CONNECT_WALLET:
      return {
        ...state,
        modalConnect: action.payload,
      };
    case TOGGLE_SETTING:
      return {
        ...state,
        modalSetting: action.payload,
      };
    default:
      return state;
  }
};

export default siteReducer;
