import React from 'react';
import { randomNumber } from '../../Services';

const CardrDetailsOrders = ({ orderDetails }) => orderDetails.map(({
  id,
  date,
  qnt,
  name,
  price,
  total,
}, idx) => (
  <div key={ randomNumber() }>
    <p data-testid="order-number">{id}</p>
    <p data-testid="order-date">{date}</p>
    <p data-testid={ `${idx}-product-qtd` }>{qnt}</p>
    <p data-testid={ `${idx}-product-name` }>{name}</p>
    <p data-testid={ `${idx}-product-total-value` }>{` R$ ${price}`}</p>
    <p data-testid="order-total-value">{`Total: R$ ${total}`}</p>
  </div>
));

export default CardrDetailsOrders;
