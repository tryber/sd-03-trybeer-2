import React from 'react';
import TopMenu from '../../Components/Header/TopMenu';
import ClientProducs from '../../Components/Products/ClientProducs';

const Products = () => (
  <div>
    <TopMenu param='TryBeer' />
    <ClientProducs />
  </div>
);

export default Products;
