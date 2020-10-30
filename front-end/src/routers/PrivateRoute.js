import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../Services';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    { ...rest }
    render={
      (props) => (isAuthenticated()
        ? (<Component { ...props } />)
        : (<Redirect to={ { pathname: '/login', state: { from: props.location } } } />))
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
};

export default PrivateRoute;
