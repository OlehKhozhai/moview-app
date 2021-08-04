import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import NotFound from 'pages/NotFound';

const MainRouter: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/movies/:id" component={MovieDetails} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default MainRouter;
