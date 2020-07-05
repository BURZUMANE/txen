import axios from "axios";
import { postsReducer } from "../slices/postsSlice";
import { postReducer } from "../slices/postSlice";
export const getPosts = params => async (dispatch, getState) => {
  try {
    const data = await axios.get("https://simple-blog-api.crew.red/posts/");
    dispatch(postsReducer.actions.getPosts(data.data));
  } catch (err) {
    console.log(err);
  }
};

export const deletePosts = id => async (dispatch, getState) => {
  console.log(id);
  try {
    const data = await axios.delete(
      `https://simple-blog-api.crew.red/posts/${id}`,
    );
    if (data.status === 200) {
      console.log("post deleted");
    }
    dispatch(postsReducer.actions.deletePost(id));
  } catch (err) {
    console.log(err);
  }
};

export const createPost = body => async (dispatch, getState) => {
  try {
    const result = await axios.post(
      "https://simple-blog-api.crew.red/posts/",
      body,
    );
    if (result.status === 201) {
      console.log("POST CREATED");
    }
  } catch (err) {
    console.log(err);
  }
};

export const getPost = id => async (dispatch, getState) => {
  try {
    const data = await axios.get(
      `https://simple-blog-api.crew.red/posts/${id}`,
    );
    if (data.status === 200) {
      console.log("Got post");
      dispatch(postReducer.actions.getPost(data.data));
    }
  } catch (err) {
    console.log(err);
  }
};
