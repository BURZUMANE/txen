import { createSlice } from "@reduxjs/toolkit";

export const postsReducer = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    getPosts: (state, { payload }) => {
      return [...payload];
    },
    deletePost: (state, { payload }) =>{
      return state.filter(post => post.id !== payload)
    },
  },
});
