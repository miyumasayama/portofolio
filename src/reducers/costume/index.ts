import { Costume, Position } from "@/types/costume";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type State = {
  costume?: Costume;
  position?: Position;
};

const initialState: State = {};

const costumeSlice = createSlice({
  name: "costume",
  initialState,
  reducers: {
    add: (state: State, action: PayloadAction<State | undefined>) => {
      state.costume = action.payload?.costume;
      state.position = action.payload?.position;
    },
  },
});

export const { add } = costumeSlice.actions;

export const CostumeReducer = costumeSlice.reducer;
