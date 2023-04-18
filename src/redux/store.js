import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import CartReducers from "./reducers/cartReducers";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
const persistConfig = {
  key: "root",
  storage,
};

 const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    CartReducers,
  })
);

export const Store = createStore(persistedReducer, composeWithDevTools());
export const persistor=persistStore(Store)

