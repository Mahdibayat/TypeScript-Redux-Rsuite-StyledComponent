import { ReduxSiteInterface, ActionType } from "./../scripts/interfaces";
import { siteTypes } from "./types";

const initialSiteState: ReduxSiteInterface = {
  name: "noName",
};

export const siteReducer = (
  state: ReduxSiteInterface = initialSiteState,
  action: ActionType
): ReduxSiteInterface => {
  switch (action.type) {
    case siteTypes.SOME_CHANGE:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
