import React, { useEffect, useContext } from 'react';
import { ContextAplication } from '../../Context';
import TopMenu from '../Header/TopMenu';
import CardrDetailsOrders from './CardrDetailsOrders';
import api from '../../Services/api';

const one = 1;
const locationUrl = window.location.pathname;
const id = locationUrl.charAt(locationUrl.length - one);

const UserOrderDetails = () => {
  const { orderDetails, setOrderDetails } = useContext(ContextAplication);

  useEffect(() => {
    if (!orderDetails.length) {
      api.get(`/orders/${id}`).then(({ data }) => setOrderDetails(data));
    };
   return;
  }, [orderDetails, setOrderDetails]);

  return (
    <div>
      <TopMenu param="Detalhes de Pedido" />
      { orderDetails && <CardrDetailsOrders orderDetails={ orderDetails } /> }
    </div>
  );
};

export default UserOrderDetails;
