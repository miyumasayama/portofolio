import { Costume } from "@/types/costume";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type State = {
  costume?: Costume;
};

const initialState: State = {};

const costumeSlice = createSlice({
  name: "costume",
  initialState,
  reducers: {
    add: (state: State, action: PayloadAction<State | undefined>) => {
      state.costume = action.payload?.costume;
    },
    // remove: (state: State, action: PayloadAction<State | undefined>) => {},
  },
});

export const { add } = costumeSlice.actions;

export const CostumeReducer = costumeSlice.reducer;
