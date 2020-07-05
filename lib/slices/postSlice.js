import { createSlice } from "@reduxjs/toolkit";

export const postReducer = createSlice({
  name: "post",
  initialState: {},
  reducers: {
    getPost: (state, { payload }) => {
      return payload;
    },
  },
});
