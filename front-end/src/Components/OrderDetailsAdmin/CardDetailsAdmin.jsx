import React from 'react';
import { Link } from 'react-router-dom';

const CardDetailsAdmin = ({ list }) => (
  list.map(({ id, deliveryAddress, deliveryNumber, totalPrice, status }, idx) => (
    <Link to={`/admin/orders/${id}`}>
      <div data-testid={`${idx}-order-card-container`}>
        <h1 data-testid={`${idx}-order-number`}>Pedido {id}</h1>
        <p data-testid={`${idx}-order-address`}>
          {deliveryAddress}, {deliveryNumber}
        </p>
        <p data-testid={`${idx}-order-total-value`}>{`Total: R$ ${totalPrice.toFixed(2).toString().replace('.', ',')}`}</p>
        <h2 data-testid={`${idx}-order-status`}>{status}</h2>
      </div>
    </Link>
  ))
);

export default CardDetailsAdmin;
