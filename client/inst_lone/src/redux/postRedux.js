import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    allposts: [],
    isFetching: false,
    error: false,
    singlePost:[],
    TimePost:[],
  },
  reducers: {
    //GET ALL
    getAllPostStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getAllPostSuccess: (state, action) => {
      state.isFetching = false;
      state.allposts = action.payload;
    },
    getAllPostFailure: (state) => {
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
      state.allposts.splice(
        state.allposts.findIndex((item) => item._id === action.payload),
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
      state.singlePost[
        state.singlePost.findIndex((item) => item._id === action.payload.data._id)
      ] = action.payload.data;
      // console.log(action.payload.data);
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
      state.allposts.push(action.payload);
    },
    addNewPostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    likePostStart:(state)=>{
      state.isFetching=true;
    },
    likePostSuccess:(state,action)=>{
      state.isFetching=false;
      state.allposts[
        state.allposts.findIndex((item) => item._id === action.payload.data._id)
      ] = action.payload.data;
      console.log(action.payload.data)
    },
    likePostFailure:(state)=>{
      state.error=true;
    },
    
    logoutP:(state)=>{
      state.posts=null
    }
  },
});

export const {
  getAllPostStart,
  getAllPostSuccess,
  getAllPostFailure,
  deletePostStart,
  deletePostSuccess,
  deletePostFailure,
  updatePostStart,
  updatePostSuccess,
  updatePostFailure,
  addNewPostStart,
  addNewPostSuccess,
  addNewPostFailure,
  logoutP,
  likePostStart,
  likePostSuccess,
  likePostFailure,
} = postSlice.actions;

export default postSlice.reducer;
