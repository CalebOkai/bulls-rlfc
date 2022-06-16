import { combineReducers } from "redux";

import ACTIONS from "../actions";
import { VoidAction } from "../actions/app/app";
import { TOKEN_STORAGE_KEY } from "../store";
import storage from "redux-persist/lib/storage";
import app, { AppState } from "./app";


export interface RootState {
  app: AppState,
};

const rootReducer = combineReducers({
  app,
});

const rootRootReducer = (state: any, action: VoidAction) => {
  if (action.type === ACTIONS.LOGOUT_USER) {
    storage.removeItem(`persist:${TOKEN_STORAGE_KEY}`);
    return rootReducer(undefined, action);
  }
  return rootReducer(state, action);
};


export default rootRootReducer;