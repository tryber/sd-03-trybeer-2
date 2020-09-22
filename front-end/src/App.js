import React from 'react';
import AplicationProvider from './Context';
import Routers from './routers';

const App = () => (
  <AplicationProvider>
    <Routers />
  </AplicationProvider>
);

export default App;
