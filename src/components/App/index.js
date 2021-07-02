import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';

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
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" component={Link} to="/">
                Most Popular
              </Button>
              <Button color="inherit" component={Link} to="/search">
                Search
              </Button>
            </Toolbar>
          </AppBar>
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
