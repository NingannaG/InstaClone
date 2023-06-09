import { loginFailure, loginStart, loginSuccess, registerStart, resgisterSuccess, registerError } from "./userRedux";
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
  catch(error){
    dispatch(registerError);
  }
}

export const getPost = async (dispatch,data) => {
  dispatch(getSinglePostStart);
  try {
    console.log(data)
    const res = await userRequest.get(`/post/all/${data}`,{"id":data});
    dispatch(getSinglePostSuccess(res));
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

export const updatePost = async (id, product, dispatch) => {
  dispatch(updatePostStart());
  try {
    const res = await userRequest.put(`/products/${id}`, product);
    dispatch(updatePostSuccess(res));
    // console.log(res.data)
    // console.log(id)
  } catch (err) {
    dispatch(updatePostFailure());
  }
};
export const addPost = async (post, dispatch) => {
  dispatch(addNewPostStart());
  try {
    const res = await userRequest.post(`/post/new`, post);
    dispatch(addNewPostSuccess(res.data));
  } catch (err) {
    dispatch(addNewPostFailure());
  }
};
