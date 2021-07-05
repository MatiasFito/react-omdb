import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import NavBar from '../NavBar';

const App = () => {
  return (
    <Router>
      <Box component="div">
        <Container maxWidth="xl">
          <Grid container spacing={2} alignItems="baseline">
            <Grid item>
              <Typography variant="h2" style={{ backgroundColor: 'yellow', fontWeight: 700 }}>
                OMDb
              </Typography>
            </Grid>
            <Grid item style={{ flexGrow: 1 }}>
              <Typography variant="h4">
                Open Movie Data Base, now with React!
              </Typography>
            </Grid>
          </Grid>
          <NavBar />
          <Switch>
            <Route path="/" exact>
              Most Popular Content
            </Route>
            <Route path="/search" exact>
              Search content
            </Route>
          </Switch>
        </Container>
      </Box>
    </Router>
  );
};

export default App;
