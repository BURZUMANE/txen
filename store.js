import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { postsReducer } from "./lib/slices/postsSlice";

const rootReducer = combineReducers({
  [postsReducer.name]: postsReducer.reducer,
});

export default configureStore({
  reducer: rootReducer,
  devTools: true,
});
