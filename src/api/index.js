// API calls to backend application and underlying database
import axios from 'axios';

// backend route; use localhost 5000 for local testing
const url = 'http://localhost:5000/posts';

// return all posts in database
export const fetch = () => axios.get(url);

// save a post in the database
export const create = (newPost) => axios.post(url, newPost);

// update a post in DB
export const update = (id, updatedPost) => {
  console.log('Inside update API');
  console.log(id);
  console.log(updatedPost);
  return axios.patch(`${url}/${id}`, updatedPost)
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
};

// delete the selected post
export const deleteSelectedPost = (id) => axios.delete(`${url}/${id}`);
