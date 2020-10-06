import React from 'react';
import TopMenu from '../../Components/Header/TopMenu';


const findProduct = () => (
  <ol>
    <li>Pedido:ID</li>
    <li>Data:</li>
    <li>Total:</li>
  </ol>
);
const UserOrders = () => {
  return (
    <div>
      <TopMenu />
      <h1>
        Meus Pedidos
    </h1>
    {findProduct()}
    </div>
  );
};

export default UserOrders;
