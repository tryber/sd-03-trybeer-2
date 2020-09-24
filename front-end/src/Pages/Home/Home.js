import React from 'react';
import { Redirect } from 'react-router-dom';

const Home = () => <Redirect to={ { pathname: '/login' } } />;

export default Home;
