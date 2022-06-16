import actions from "..";


export interface VoidAction {
  type: string;
}
export interface BooleanAction {
  type: string;
  value: boolean;
}


export type Action =
  | VoidAction;



/** Authentication Actions */
export const logoutUser = (): VoidAction => ({
  type: actions.LOGOUT_USER
});

/** UI Actions*/
export const setAppLoading = (value: boolean): BooleanAction => ({
  type: actions.SET_APP_LOADING,
  value
});