import {
  configureStore,
  combineReducers,
  Middleware,
  MiddlewareArray,
} from "@reduxjs/toolkit";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { apiSlice } from "./api";
import write from "../pages/write/services/write.slice";
import diary from "../pages/diary/services/diary.slice";
import curation from "../pages/curation/services/curation.slice";
import likemap from "../pages/likemap/services/likemap.slice";

//local storage에 저장되어 새로고침해도 사라지지 않는 state
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["write", "curation"],
};

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  write,
  diary,
  curation,
  likemap,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares: Middleware[] = [...new MiddlewareArray<Middleware[]>()];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    ...middlewares,
    apiSlice.middleware,
  ],
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
