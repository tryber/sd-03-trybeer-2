import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ClientProducs from '../Components/Products/ClientProducs';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login';
import Register from '../Components/Register/Register';
import PrivateRoute from './PrivateRoute';

const Routers = () => (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route exact path="/login" component={ Login } />
    <Route exact path="/register" component={ Register } />
    <PrivateRoute exact path="/admin/orders" component={ () => <div>Funcionando</div> } />
    <PrivateRoute exact path="/products" component={ ClientProducs } />
  </Switch>
);

export default Routers;
