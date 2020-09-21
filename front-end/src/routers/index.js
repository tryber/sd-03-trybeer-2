import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Pages/Login';

const Routers = () => (
  <Switch>
    <Route path="/" component={ Login } />
  </Switch>
);

export default Routers;
