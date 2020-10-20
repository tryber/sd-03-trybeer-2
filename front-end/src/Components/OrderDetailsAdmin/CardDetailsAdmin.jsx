import React from 'react';
import { Link } from 'react-router-dom';

const CardDetailsAdmin = ({ list }) => (
  list.map(({ id, deliveryAddress, deliveryNumber, totalPrice, status }, idx) => (
    <Link to={`/admin/orders/${id}`}>
      <div data-testid={`${idx}-order-card-container`}>
        <p data-testid={`${idx}-order-number`}>Pedido {id}</p>
        <p data-testid={`${idx}-order-address`}>
          {deliveryAddress}, {deliveryNumber}
        </p>
        <p data-testid={`${idx}-order-total-value`}>{`Total: R$ ${totalPrice.toFixed(2).toString().replace('.', ',')}`}</p>
        <p data-testid={`${idx}-order-status`}>{status}</p>
      </div>
    </Link>
  ))
);

export default CardDetailsAdmin;
