import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface StateType {
  name: string;
  description: string;
  time: string;
}

const initialState = {
  name: "",
  description: "",
  time: "",
};

export const todoSlice = createSlice({
  name: "todoItem",
  initialState,
  reducers: {
    input: (
      state: StateType,
      action: PayloadAction<{
        field: keyof StateType;
        value: string;
      }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export const { input } = todoSlice.actions;

export default todoSlice.reducer;
