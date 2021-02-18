// API calls to backend application and underlying database
import axios from 'axios';

// backend route; use localhost 5000 for local testing
const url = 'http://localhost:5000/posts';

// return all posts in the DB
export const fetch = () => axios.get(url);

// create a post in the DB
export const create = (newPost) => axios.post(url, newPost);

// update a post in the DB
export const update = (id, updatedPost) => axios.patch(`${url}/${id}`,
    updatedPost);

// delete the selected post
export const deleteSelectedPost = (id) => axios.delete(`${url}/${id}`);

// like the selected post
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
