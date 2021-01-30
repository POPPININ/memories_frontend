import React from 'react';
import Post from './post/post';
import useStyles from './styles.js'; 
import { useSelector } from "react-redux";

const Posts = () => 
{
    // retrieve 'posts' from the global state; 
    // defined in ./reducers/index.js
    const posts = useSelector(state => state.posts);
    // styles for posts section
    const classes = useStyles();
    
    return (
        <>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </>)
    ;
}

export default Posts;