import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ClientProducs from '../Pages/Products';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import PrivateRoute from './PrivateRoute';
import Profile from '../Pages/Profile';
import Checkout from '../Pages/Checkout';
import Orders from '../Pages/userOrders';
import AdminProfile from '../Pages/Admin';
/* import AdminOrders from '../Pages/AdminsOrders'; */
import DetailsOrders from '../Pages/userOrders/userDetailsOrders';
import DetailsOrdersAdmin from '../Pages/AdminOrderDetails';
import AdminDetailCard from '../Components/OrderDetailsAdmin/AdminDetailOrderCard';

const Routers = () => (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route exact path="/login" component={ Login } />
    <Route exact path="/register" component={ Register } />
    <PrivateRoute exact path="/orders" component={ Orders } />
    <PrivateRoute exact path="/orders/:id" component={ DetailsOrders } />
    <PrivateRoute exact path="/products" component={ ClientProducs } />
    <PrivateRoute exact path="/profile" component={ Profile } />
    <PrivateRoute exact path="/checkout" component={ Checkout } />
    <PrivateRoute exact path="/admin/profile" component= { AdminProfile } />
    <PrivateRoute exact path="/admin/orders/:id" component={ AdminDetailCard } />
    <PrivateRoute exact path="/admin/orders" component={ DetailsOrdersAdmin } />
  </Switch>
);

export default Routers;
