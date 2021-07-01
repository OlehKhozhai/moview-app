import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MainRouterProps = any;

const MainRouter: React.FC<MainRouterProps> = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default MainRouter;
