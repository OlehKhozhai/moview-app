import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import NotFound from 'pages/NotFound';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MainRouterProps = any;

const MainRouter: React.FC<MainRouterProps> = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/details/:id" component={MovieDetails} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default MainRouter;
