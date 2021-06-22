import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';

type MainRouterProps = {};

const MainRouter: React.FC<MainRouterProps> = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default MainRouter;
