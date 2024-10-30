import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { CostumeReducer } from "@/reducers/costume";

export const store = configureStore({
  reducer: {
    Costume: CostumeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

// TODO: backend作成する
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const selectAppState = (state: RootState) => state;
