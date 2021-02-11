import React from 'react';
import PropTypes from 'prop-types';
import Post from './post/Post.js';
import useStyles from './styles.js';
import {useSelector} from 'react-redux';
import {Grid, CircularProgress} from '@material-ui/core';

const Posts = ({setCurrentID}) => {
  // retrieve 'posts' from the global state;
  // defined in ./reducers/index.js
  const posts = useSelector((state) => state.posts);

  const classes = useStyles();

  return (
    <>
      {
        !posts.length ? <CircularProgress /> : (
          <Grid className={classes.mainContainer} container
            alignItems='stretch' spacing={3}>
            {
              posts.map((post) => (
                <Grid key={post._id} item xs={12} sm={6}>
                  <Post post={post} setCurrentID={setCurrentID} />
                </Grid>
              ))
            }
          </Grid>
        )
      }
    </>)
  ;
};

export default Posts;

Posts.propTypes = {
  setCurrentID: PropTypes.func.isRequired,
};
