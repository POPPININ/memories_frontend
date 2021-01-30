// Redux action creators which are dispatched to change state
import * as api from '../api'; // import all API requests

// Notify post retrieval from DB; asynchronous.
export const getPosts = () => async(dispatch) =>
{ 
    try {

        const { data } = await api.fetchPosts();
        dispatch({ type : 'FETCH_ALL', payload : data });

    } catch (error) {
        console.log(error.message);
    }
}

// Create a post and dispatch the corresponding action
export const createPost = (post) => async(dispatch) =>
{ 
    try {

        const { data } = await api.createPost(post);
        dispatch({ type : 'CREATE', payload : data });

    } catch (error) {
        console.log(error.message);
    }
}



