import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Components/Register/Register';
import PrivateRoute from './PrivateRoute';

const Routers = () => (
  <Switch>
    <Route exact path="/Login" component={ Login } />
    <Route exact path="/register" component={ Register } />
    <PrivateRoute path="/app" component={ () => <h1>Funcionando</h1> } />
  </Switch>
);

export default Routers;
