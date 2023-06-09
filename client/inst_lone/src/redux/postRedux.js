import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getSinglePostStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getSinglePostSuccess: (state, action) => {
      state.isFetching = false;
      state.posts = action.payload.data;
    },
    getSinglePostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deletePostStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deletePostSuccess: (state, action) => {
      state.isFetching = false;
      state.posts.splice(
        state.posts.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deletePostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updatePostStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updatePostSuccess: (state, action) => {
      state.isFetching = false;
      state.posts[
        state.posts.findIndex((item) => item._id === action.payload.data._id)
      ] = action.payload.data;
      console.log(action.payload.data);
    },
    updatePostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    addNewPostStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addNewPostSuccess: (state, action) => {
      state.isFetching = false;
      state.posts.push(action.payload);
    },
    addNewPostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutP:(state)=>{
      state.posts=null
    }
  },
});

export const {
  getSinglePostStart,
  getSinglePostSuccess,
  getSinglePostFailure,
  deletePostStart,
  deletePostSuccess,
  deletePostFailure,
  updatePostStart,
  updatePostSuccess,
  updatePostFailure,
  addNewPostStart,
  addNewPostSuccess,
  addNewPostFailure,
  logoutP
} = postSlice.actions;

export default postSlice.reducer;
