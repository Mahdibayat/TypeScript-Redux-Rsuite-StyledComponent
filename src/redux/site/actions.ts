import { ActionType } from "./../../scripts/interfaces";
import {
  CHANGE_THEME,
  TOGGLE_CONNECT_WALLET,
  TOGGLE_SETTING,
} from "./actionTypes";

export const changeTheme = (theme: string): ActionType => ({
  type: CHANGE_THEME,
  payload: theme,
});

export const modalConnect = (bool: boolean): ActionType => ({
  type: TOGGLE_CONNECT_WALLET,
  payload: bool,
});

export const modalSetting = (bool: boolean): ActionType => ({
  type: TOGGLE_SETTING,
  payload: bool,
});
