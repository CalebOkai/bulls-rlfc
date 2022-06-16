import { useDispatch } from "react-redux";

import * as actions from "./app";


const useAppActions = () => {
  const dispatch = useDispatch();

  /** Authentication Actions */
  const logoutUser = () =>
    dispatch(actions.logoutUser());
  /** UI Actions */
  const setAppLoading = (payload: boolean) =>
    dispatch(actions.setAppLoading(payload));


  return {
    logoutUser,

    setAppLoading,
  }
}

export default useAppActions;
