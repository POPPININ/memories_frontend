// Redux action creators which are dispatched to change state
import * as api from '../api'; // import all API requests

// Notify post retrieval from DB; asynchronous.
export const getPosts = () => async (dispatch) => {
  try {
    const {data} = await api.fetch();
    dispatch({type: 'FETCH_ALL', payload: data});
  } catch (error) {
    console.log(error);
  }
};


// Create a post and dispatch the corresponding action
export const createPost = (post) => async (dispatch) => {
  try {
    const {data} = await api.create(post);
    dispatch({type: 'CREATE', payload: data});
  } catch (error) {
    console.log(error);
  }
};


// Update post and dispatch event
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const {updatedPost} = await api.update(id, post);
    console.log('Received API response.');
    dispatch({type: 'UPDATE', payload: updatedPost});
  } catch (error) {
    console.log(error);
  }
};


// Delete post and dispatch event
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deleteSelectedPost(id);
    dispatch({type: 'DELETE', payload: id});
  } catch (error) {
    console.log(error);
  }
};


