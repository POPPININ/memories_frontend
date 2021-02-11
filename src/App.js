/* eslint-disable require-jsdoc */
import React, {useState, useEffect} from 'react';
import {Container, Typography, AppBar, Grow, Grid} from '@material-ui/core';
import memories from './images/memories.png';
import Posts from './components/posts/Posts.js';
import Form from './components/forms/Form.js';
import useStyles from './styles.js';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts.js';

export default function App() {
  const [currentID, setCurrentID] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  // load all posts and dispatch them. To be used by Posts component.
  useEffect(() => {
    dispatch(getPosts());
  }, [currentID, dispatch]);

  return (
    <Container maxwidth='lg'>

      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.typography} variant='h2' align='center'>
            Memories
        </Typography>
        <img className={classes.image} src={memories}
          alt='Memories' height='60' />
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch'
            spacing={3} >
            <Grid item xs={12} sm={7} >
              <Posts setCurrentID={setCurrentID} />
            </Grid>
            <Grid item xs={12} sm={4} >
              <Form currentID={currentID} setCurrentID={setCurrentID} />
            </Grid>
          </Grid>
        </Container>
      </Grow>

    </Container>
  );
}
