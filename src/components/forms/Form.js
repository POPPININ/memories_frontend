import React, {useState, useEffect} from 'react';
import useStyles from './styles.js';
import PropTypes from 'prop-types';
import {Typography, TextField, Paper, Button} from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch, useSelector} from 'react-redux';
import {createPost, updatePost} from '../../actions/posts.js';

const Form = ({currentID, setCurrentID}) => {
  const classes = useStyles();

  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });

  // return existing posts
  const post = useSelector((state) => currentID ?
    state.posts.find((post) => post._id === currentID) : null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  /**
   * Dispatch user submit.
   * @param {Event} e the button click event.
   */
  function handleSubmit(e) {
    e.preventDefault();

    if (currentID) {
      dispatch(updatePost(currentID, postData));
    } else {
      dispatch(createPost(postData));
    }

    clear();
  }

  /**
   * Clear all field in the form.
   */
  function clear() {
    setCurrentID(null);
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate
        className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentID ? 'Editing': 'Creating' } a Memory
        </Typography>

        <TextField name="creator" variant="outlined" label="Creator"
          fullWidth value={postData.creator}
          onChange={(event) => setPostData({...postData,
            creator: event.target.value})}
        />
        <TextField name="title" variant="outlined" label="Title"
          fullWidth value={postData.title}
          onChange={(event) => setPostData({...postData,
            title: event.target.value})}
        />
        <TextField name="message" variant="outlined" label="Message"
          fullWidth value={postData.message}
          onChange={(event) => setPostData({...postData,
            message: event.target.value})}
        />
        <TextField name="tags" variant="outlined" label="Tags"
          fullWidth value={postData.tags}
          onChange={(event) => setPostData({...postData,
            tags: event.target.value})}
        />

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({base64}) => setPostData({...postData,
              selectedFile: base64})}
          />
        </div>

        <Button className={classes.buttonSubmit} variant="contained"
          color="primary" size="large" type="submit" fullWidth>
                    Submit
        </Button>

        <Button variant="contained" color="secondary" size="small" fullWidth
          onClick={() => clear()}>
                    Clear
        </Button>

      </form>
    </Paper>
  );
};

export default Form;

Form.propTypes = {
  currentID: PropTypes.number,
  setCurrentID: PropTypes.func,
};

