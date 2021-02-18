// Redux action creators which are dispatched to change state
import * as api from '../api';
import {FETCH_ALL, CREATE, UPDATE,
  DELETE, LIKE} from '../constants.js';

// Notify post retrieval from DB; asynchronous.
export const getPosts = () => async (dispatch) => {
  try {
    const {data} = await api.fetch();
    dispatch({type: FETCH_ALL, payload: data});
  } catch (error) {
    console.log(error);
  }
};


// Create a post and dispatch the corresponding action
export const createPost = (post) => async (dispatch) => {
  try {
    const {data} = await api.create(post);
    dispatch({type: CREATE, payload: data});
  } catch (error) {
    console.log(error);
  }
};


// Update post and dispatch event
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const {data} = await api.update(id, post);
    dispatch({type: UPDATE, payload: data});
  } catch (error) {
    console.log(error);
  }
};


// Delete post and dispatch event
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deleteSelectedPost(id);
    dispatch({type: DELETE, payload: id});
  } catch (error) {
    console.log(error);
  }
};


// Like post and dispatch event
export const likePost = (id) => async (dispatch) => {
  try {
    const {data} = await api.likePost(id);
    dispatch({type: LIKE, payload: data});
  } catch (error) {
    console.log(error);
  }
};


