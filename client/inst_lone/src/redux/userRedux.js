import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    singleUser:null,
    friendSearch:null,
    profileOrFriend:false,
    conversation:null,
    friendList:null,
    conversationInfo:null
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    registarStart :(state)=>{
      state.isFetching=true;
    },
    registarSuccess:(state,action)=>{
      state.isFetching=false;
    },
    registarError:(state)=>{
      state.error=true;
    },
    getSingleUserStart:(state)=>{
      state.isFetching=true
    },
    getSingleUserSuccess:(state,action)=>{
      state.isFetching=false;
      state.singleUser=action.payload
    },
    getSingleUserError:(state)=>{
      state.error=true
    },
    getSingleUserTestStart:(state)=>{
      state.isFetching=true
    },
    getSingleUserTestSuccess:(state,action)=>{
      state.isFetching=false;
      state.friendList=action.payload
    },
    getSingleUserTestError:(state)=>{
      state.error=true
    },
    friendSearch:(state,action)=>{
      state.friendSearch=action.payload;
      state.profileOrFriend=true;
    },
    fallowUserStart:(state)=>{
      state.isFetching=true;
    },
    fallowUserSuccess:(state,action)=>{
      state.isFetching=false;
      state.currentUser=action.payload.data;
    },
    fallowUserError:(state)=>{
      state.error=true;
    },
    conversationSuccess:(state,action)=>{
      state.conversation=action.payload.data;
    },
    conversationInfo:(state,action)=>{
      state.conversationInfo=action.payload;
      console.log(action.payload);
    },
    newConversationSuccess:(state,action)=>{
      state.conversation.push(action.payload);
      // state.conversationInfo=action.payload;
    }
    
  },
});

export const { loginStart, loginSuccess, loginFailure ,logout,registarError,registarStart,registarSuccess,
getSingleUserStart,getSingleUserSuccess,getSingleUserError,singleUser,friendSearch,fallowUserStart,fallowUserSuccess,fallowUserError,conversationSuccess,getSingleUserTestError,getSingleUserTestSuccess,getSingleUserTestStart,conversationInfo,newConversationSuccess} = userSlice.actions;
export default userSlice.reducer;
