import { siteTypes } from "./types";

// SITE ACTIONS

export const setDevices = (data: any) => ({
  type: siteTypes.SOME_CHANGE,
  payload: data,
});
