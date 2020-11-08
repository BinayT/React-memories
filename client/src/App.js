import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import memories from './images/memories.png';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  return (
    <Container maxwidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography variant='h2' align='center' className={classes.heading}>
          Memories
        </Typography>
        <img
          src={memories}
          alt='memories'
          height='60'
          className={classes.image}
        />
      </AppBar>
      <Grow in>
        <Grid
          container
          justify='space between'
          alignItems='stretch'
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
}

export default App;
