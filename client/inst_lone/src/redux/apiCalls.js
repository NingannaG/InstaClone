import { loginFailure, loginStart, loginSuccess, registerStart, resgisterSuccess, registerError, getUserStart, getUserError, getUserSuccess,FallowUserStart,FallowUserSuccess,FallowUserError } from "./userRedux";
import { publicRequest, userRequest } from "./reqestMethod";
import {
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
export const register = async (dispatch, userdata) => {
  dispatch(registerStart);
  try {
    const res = await publicRequest.post("/user/new", userdata);
    dispatch(resgisterSuccess(res.data));
  }
  catch (error) {
    dispatch(registerError);
  }
}

export const getPost = async (dispatch, data) => {
  dispatch(getSinglePostStart);
  try {
    const res = await userRequest.get(`/post/all/${data}`, { "id": data });
    dispatch(getSinglePostSuccess(res));
    // console.log(res)
  } catch (err) {
    dispatch(getSinglePostFailure);
  }
};

export const deletePost = async (id, dispatch) => {
  dispatch(deletePostStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deletePostSuccess(id));
  } catch (err) {
    dispatch(deletePostFailure());
  }
};

export const updatePost = async (id, likedUser, dispatch) => {
  dispatch(updatePostStart());
  try {
    const res = await userRequest.put(`/post/${id}`, { "id": likedUser });
    dispatch(updatePostSuccess(res));
    // console.log(res.data)
    // console.log(id)
  } catch (err) {
    dispatch(updatePostFailure());
  }
};
export const likePost = async (Postid, likedUser, dispatch) => {
  dispatch(likePostStart());
  try {
    const res = await userRequest.put(`/post/${Postid}/like`, {"like": likedUser });
    dispatch(likePostSuccess(res));
    console.log(res.data);
  } catch (err) {
    dispatch(likePostFailure());
  }
}
// fallow user
export const fallowUser=async (userId,friendId,dispatch)=>{
  dispatch(FallowUserStart())
  try {
        // await user.updateOne({ $push: { followers: req.body.userId } });
        const res=await userRequest.put(`/user/${friendId}/follow`,{"userId":userId});
        dispatch(FallowUserSuccess(res));
  } catch (error) {
  dispatch(FallowUserError());
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
export const getUser = async (id, dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await userRequest.get(`/user/singleUser/${id}`, { "id": id })
    dispatch(getUserSuccess(res.data))
  } catch (error) {
    dispatch(getUserError)
  }
}
