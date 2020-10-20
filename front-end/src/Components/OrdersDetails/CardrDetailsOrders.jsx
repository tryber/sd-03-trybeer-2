import React from 'react';
import { randomNumber } from '../../Services';

const CardrDetailsOrders = ({ orderDetails }) => orderDetails.map(({
  id,
  sale_date,
  qnt,
  name,
  price,
  total_price,
}, idx) => {
  const date = new Date(sale_date);
  const finshDate = `${date.getDate()}/${date.getMonth()}`;
  return (
    <div key={ randomNumber() }>
      <p data-testid="order-number">{id}</p>
      <p data-testid="order-date">{finshDate}</p>
      <p data-testid={ `${idx}-product-qtd` }>{qnt}</p>
      <p data-testid={ `${idx}-product-name` }>{name}</p>
      <p data-testid={ `${idx}-product-total-value` }>{` R$ ${price}`}</p>
      <p
        data-testid="order-total-value"
      >
        {`Total: R$ ${total_price.toFixed(2).toString().replace('.', ',')}`}
      </p>
    </div>
)});

export default CardrDetailsOrders;
