import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ClientProducs from '../Pages/Products';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import PrivateRoute from './PrivateRoute';
import Profile from '../Pages/Profile';
import Checkout from '../Pages/Checkout';

const Routers = () => (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route exact path="/login" component={ Login } />
    <Route exact path="/register" component={ Register } />
    <PrivateRoute exact path="/admin/orders" component={ () => <div>Funcionando</div> } />
    <Route exact path="/products" component={ ClientProducs } />
    <Route exact path="/profile" component={ Profile } />
    <PrivateRoute exact path="/checkout" component={ Checkout } />
  </Switch>
);

export default Routers;
