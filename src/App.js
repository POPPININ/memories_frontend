import React, { useEffect } from 'react';
import { Container, Typography, AppBar, Grow, Grid } from "@material-ui/core";
import memories from './images/memories.png'; 
import Posts from './components/posts/Posts.js';
import Form from './components/forms/Form.js';
import useStyles from './styles.js'; 
import { useDispatch } from "react-redux";
import { getPosts } from './actions/posts.js';

export default function App()
{
    // styles for root component
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    },[dispatch]);

    return (
        <Container maxwidth='lg'>

            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.hypography} variant='h2' align='center'>Memories</Typography>
                <img className={classes.image} src={memories} alt='Memories' height='60' />
            </AppBar>

            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3} >
                        <Grid item xs={12} sm={7} >
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
    );
}