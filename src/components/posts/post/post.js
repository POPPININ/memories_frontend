
import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles.js';
import {Card, CardActions, CardContent, CardMedia,
  Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {deletePost} from '../../../actions/posts.js';


/**
 * Render post data using passed props.
 * @param {props} post a single user post.
 * @return {Card} the post contents rendered in a Card.
 */
export default function Post({post, setCurrentID}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile}
        title={post.title}/>
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body'>
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{color: 'white'}} size='small'
          onClick={() => setCurrentID(post._id)}>
          <MoreHorizIcon fontSize='default' />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography classes={classes.title} variant='body2' color='textSecondary'>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant='h5' gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size='small' color='primary' onClick={() => {}}>
          <ThumbUpAltIcon fontSize='small' />
          Like
          {post.likeCount}
        </Button>
        <Button size='small' color='primary'
          onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize='small' />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    selectedFile: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    message: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
  }),
  setCurrentID: PropTypes.func.isRequired,
};

