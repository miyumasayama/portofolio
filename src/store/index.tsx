import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { CostumeReducer } from "@/reducers/costume";
import { baseApi } from "@/reducers/appsApi/baseApi";

export const store = configureStore({
  reducer: {
    Costume: CostumeReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

// TODO: backend作成する
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const selectAppState = (state: RootState) => state;
