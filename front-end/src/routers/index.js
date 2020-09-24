import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login';
import Register from '../Components/Register/Register';
import PrivateRoute from './PrivateRoute';

const Routers = () => (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route exact path="/login" component={ Login } />
    <Route exact path="/register" component={ Register } />
    <PrivateRoute path="/app" component={ () => <h1>Funcionando</h1> } />
  </Switch>
);

export default Routers;
