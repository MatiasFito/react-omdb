import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import NavBar from '../NavBar';
import Header from '../Header';

const App = () => {
  return (
    <Router>
      <Box component="div">
        <Container maxWidth="xl">
          <Header />
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
