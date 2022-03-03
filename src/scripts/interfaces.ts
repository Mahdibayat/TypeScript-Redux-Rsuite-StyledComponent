//THEME STYLED
export interface ThemeType {
  mainColor: string;
  seccoundColor: string;
  darkBack: string;
}

//REDUX
export interface ReduxSiteInterface {
  name: string;
}
export interface ActionType {
  type: string;
  payload: any;
}
export interface ReduxSiteTypes {
  SOME_CHANGE: string;
}
export type DispatchType = (args: ActionType) => ActionType;
