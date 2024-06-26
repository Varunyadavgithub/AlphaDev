import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReduce = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};
const persistedReducer = persistReducer(persistConfig, rootReduce);

export const store = configureStore({
    reducer: persistedReducer,
    // This middleware helps to prevent by error from redux toolkit
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor=persistStore(store);
