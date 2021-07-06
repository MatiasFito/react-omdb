import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';
import AppRoutes from '../AppRoutes';

const App = () => {
  return (
    <Router>
      <Box component="div">
        <Container maxWidth="xl">
          <Header />
          <NavBar />
          <AppRoutes />
        </Container>
      </Box>
    </Router>
  );
};

export default App;
