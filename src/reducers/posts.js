import {FETCH_ALL, CREATE, UPDATE,
  DELETE, LIKE} from '../constants.js';

export default (posts = [], action) => {
  switch (action.type) {
    // fetch all posts
    case FETCH_ALL:
      return action.payload;

    // create a post under posts component
    case CREATE:
      return [...posts, action.payload];

    // update an existing post
    case UPDATE:
      return posts.map((post) => post._id === action.payload._id ?
        action.payload : post);

    // like an existing post
    case LIKE:
      return posts.map((post) => post._id === action.payload._id ?
        action.payload : post);

    // delete post by simply filtering non-deleted posts using ID
    case DELETE:
      return posts.filter((post) => post._id != action.payload);

    default:
      return posts;
  }
};
