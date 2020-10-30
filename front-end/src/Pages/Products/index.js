import React from 'react';
import TopMenu from '../../Components/Header/TopMenu';
import ClientProducs from '../../Components/Products/ClientProducs';

// import './styles.css';

const Products = () => (
  <div className="container-products">
    <TopMenu param="TryBeer" />
    <ClientProducs />
  </div>
);

export default Products;
