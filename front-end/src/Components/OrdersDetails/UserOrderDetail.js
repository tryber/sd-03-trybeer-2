import React, { useEffect, useContext } from 'react';
import { ContextAplication } from '../../Context';
import TopMenu from '../Header/TopMenu';
import CardrDetailsOrders from './CardrDetailsOrders';
import api from '../../Services/api';

const UserOrderDetails = () => {
  const { ordersUser, orderDetails, setOrderDetails } = useContext(ContextAplication);
  const { id } = ordersUser;

  useEffect(() => {
    api.get(`/orders/${id}`).then(({ data }) => setOrderDetails(data));
  }, [orderDetails, setOrderDetails, id]);

  return (
    <div>
      <TopMenu param="Detalhes de Pedido" />
      { orderDetails && <CardrDetailsOrders orderDetails={ orderDetails } /> }
    </div>
  );
};

export default UserOrderDetails;
