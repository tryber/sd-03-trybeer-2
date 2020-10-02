import React from 'react';
import TopMenu from '../../Components/Header/TopMenu';

const OrdersList = () => (
  <li data-testid="0-order-card-container">
    <div data-testid="0-order-number">Pedido:</div>
    <div data-testid="0-order-date">Hora:</div>
    <div data-testid="0-order-total-value">Total:</div>
  </li>
);

const UserOrders = () => {

  const OrderList = async (e) => {
    e.preventDefault();
    try {
      await api.get('/sales', {
        product,
        orders,
        totalPrice
      });
      const response = await api.get('/login', { order, totalPrice, date });
      login(response.data);
      history.push('/orders/detail');
    } catch
    (err) {
    } return null;
  };
  return (
    <div >
      <TopMenu param='Meus pedidos' />
      <OrdersList />
    </div>
  );
};

export default UserOrders;
