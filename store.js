import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { postsReducer } from "./lib/slices/postsSlice";
import { postReducer } from "./lib/slices/postSlice";

const rootReducer = combineReducers({
  [postsReducer.name]: postsReducer.reducer,
  [postReducer.name]: postReducer.reducer,
});

export default configureStore({
  reducer: rootReducer,
  devTools: true,
});
