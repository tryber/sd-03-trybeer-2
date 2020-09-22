import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Components/Register/Register"

const Routers = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/register" component={Register} />
  </Switch>
);

export default Routers;
