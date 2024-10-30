import { createSelector } from "@reduxjs/toolkit";
import { selectAppState } from "@/store";

export const selectCostume = createSelector(
  selectAppState,
  (state) => state.Costume
);
