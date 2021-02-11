export default (posts = [], action) => {
  switch (action.type) {
    // fetch all posts
    case 'FETCH_ALL':
      return action.payload;

    // create a post under posts component
    case 'CREATE':
      return [...posts, action.payload];

    // update an existing post
    case 'UPDATE':
      return posts.map((post) => post._id === action.payload._id ?
        action.payload : post);

    // delete post by simply filtering non-deleted posts using ID
    case 'DELETE':
      return posts.filter((post) => post._id != action.payload);

    default:
      return posts;
  }
};
