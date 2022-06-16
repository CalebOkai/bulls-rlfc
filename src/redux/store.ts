import { createStore } from "redux";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


export const TOKEN_STORAGE_KEY = "bulls-rlfc";

const persistConfig = {
  key: TOKEN_STORAGE_KEY,
  storage
}

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
)

export const store = createStore(
  persistedReducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);