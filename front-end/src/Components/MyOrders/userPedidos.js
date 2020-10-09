import React, { useEffect, useContext } from 'react';
import TopMenu from '../Header/TopMenu';
import api from '../../Services/api';
import { ContextAplication } from '../../Context';
import CardOrders from './CardOrders';

const UserOrders = () => {
  const { setOrdersUser, ordersUser } = useContext(ContextAplication);

  useEffect(() => {
    api.get('/orders').then((data) => console.log(data));
  }, [setOrdersUser, ordersUser]);

  return (
    <div>
      <TopMenu param="Meus pedidos" />
      { ordersUser && <CardOrders ordersUser={ ordersUser } /> }
    </div>
  );
};

export default UserOrders;
