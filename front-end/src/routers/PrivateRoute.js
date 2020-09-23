import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../Services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    { ...rest }
    render={
      (props) => (isAuthenticated()
        ? (<Component { ...props } />)
        : (<Redirect to={ { pathname: '/', state: { from: props.location } } } />))
    }
  />
);

PrivateRoute.propTypes = {
  location: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
};

export default PrivateRoute;
