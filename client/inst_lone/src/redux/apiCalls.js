import { loginFailure, loginStart, loginSuccess, registarStart, registarSuccess, registarError, getSingleUserStart, getSingleUserError, getSingleUserSuccess,fallowUserStart,fallowUserSuccess,fallowUserError, conversationSuccess, getSingleUserTestSuccess, getSingleUserTestError, getSingleUserTestStart, friendSearch, newConversationSuccess } from "./userRedux";
import { publicRequest, userRequest } from "./reqestMethod";
import {
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
  likePostStart,
  likePostSuccess,
  likePostFailure
} from "./postRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/user/login", user);
    dispatch(loginSuccess(res.data));
    // console.log(res.data)
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const registar = async (dispatch, userdata) => {
  dispatch(registarStart);
  try {
    const res = await publicRequest.post("/user/new", userdata);
    dispatch(registarSuccess(res.data));
  }
  catch (error) {
    dispatch(registarError);
  }
}

export const getAllPost = async (dispatch, data) => {
  dispatch(getAllPostStart());
  try {
    const res = await userRequest.get(`/post/all/${data}`, { "id": data });
    dispatch(getAllPostSuccess(res.data));
    // console.log(res)
  } catch (err) {
    dispatch(getAllPostFailure());
  }
};

export const deletePost = async (id, dispatch) => {
  dispatch(deletePostStart());
  try {
    const res = await userRequest.delete(`/post/${id}`);
    dispatch(deletePostSuccess(id));
  } catch (err) {
    dispatch(deletePostFailure());
  }
};

export const updatePost = async (id,updateData, dispatch) => {
  dispatch(updatePostStart());
  try {
    const res = await userRequest.put(`/post/${id}`, { "id": updateData });
    dispatch(updatePostSuccess(res));
    // console.log(res.data)
    // console.log(id)
  } catch (err) {
    dispatch(updatePostFailure());
  }
};
export const likePost = async (postId, likedUser, dispatch) => {
  dispatch(likePostStart());
  try {
    const res = await userRequest.put(`/post/${postId}/like`, {"like": likedUser });
    dispatch(likePostSuccess(res));
    console.log(res.data);
  } catch (err) {
    dispatch(likePostFailure());
  }
}
// fallow user
export const fallowUser=async (userId,friendId,dispatch)=>{
  dispatch(fallowUserStart())
  try {
        // await user.updateOne({ $push: { followers: req.body.userId } });
        const res=await userRequest.put(`/user/${friendId}/follow`,{"userId":userId});
        dispatch(fallowUserSuccess(res));
  } catch (error) {
  dispatch(fallowUserError());
  }
}
export const addPost = async (post, dispatch) => {
  dispatch(addNewPostStart());
  try {
    const res = await userRequest.post(`/post/new`, post);
    dispatch(addNewPostSuccess(res.data));
  } catch (err) {
    dispatch(addNewPostFailure());
  }
};
export const getSingleUser = async (id, dispatch) => {
  dispatch(getSingleUserStart());
  try {
    const res = await userRequest.get(`/user/singleUser/${id}`, { "id": id })
    dispatch(getSingleUserSuccess(res.data))
  } catch (error) {
    dispatch(getSingleUserError())
  }
}
export const getSingleUserTest = async (id, dispatch) => {
  dispatch(getSingleUserTestStart());
  try {
    const res = await userRequest.get(`/user/singleUser/${id}`, { "id": id })
    dispatch(getSingleUserTestSuccess(res.data))
  } catch (error) {
    dispatch(getSingleUserTestError())
  }
}
export const getConversation=async(userId,dispatch)=>{
  try {
    const res=await userRequest.get(`/conversation/${userId}`,{"id":userId});
    dispatch(conversationSuccess(res));
  } catch (error) {
    console.log("error in conversation")
  }
}
export const newConversatioon=async(body,dispatch)=>{
  try {
    const res=await userRequest.post(`/conversation`,body);
    dispatch(newConversationSuccess(res.data));
    console.log(res.data)
  } catch (error) {
    console.log(error)
    
  }
}

