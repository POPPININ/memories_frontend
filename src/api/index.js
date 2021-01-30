// API calls to backend application and underlying database
import axios from 'axios';


// backend route; use localhost 5000 for local testing
const url = 'http://localhost:5000/posts';

// return all posts in database
export const fetchPosts = () => axios.get(url);

// save a post in the database
export const createPost = (newPost) => axios.post(url, newPost);
