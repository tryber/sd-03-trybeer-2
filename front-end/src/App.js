import React from 'react';
import AplicationProvider from './Context';
import Routers from './routers';

// import './styles/global.css';

const App = () => (
  <AplicationProvider>
    <Routers />
  </AplicationProvider>
);

export default App;
