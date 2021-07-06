import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import MostPopular from '../MostPopular';

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <MostPopular />
      </Route>
      <Route path="/search" exact>
        Search content
      </Route>
    </Switch>
  );
};

export default AppRoutes;
