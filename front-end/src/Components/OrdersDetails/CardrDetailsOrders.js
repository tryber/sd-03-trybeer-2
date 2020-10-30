import React from 'react';
import { randomNumber } from '../../Services';

const one = 1;
const two = 2;

const CardrDetailsOrders = ({ orderDetails }) => orderDetails.map(({
  timestamp,
  orderId,
  quantity,
  name,
  salePrice,
  totalSalePrice,
}, idx) => {
  const locationUrl = window.location.pathname;
  const id = locationUrl.charAt(locationUrl.length - one);
  if (orderId === Number(id)) {
    const date = new Date(timestamp);
    const finshDate = `${date.getDate()}/${date.getMonth() + one}`;
    return (
      <div key={ randomNumber() }>
        <p data-testid="order-number">{`Pedido ${orderId}`}</p>
        <p data-testid="order-date">{finshDate}</p>
        <p data-testid={ `${idx}-product-qtd` }>{quantity}</p>
        <p data-testid={ `${idx}-product-name` }>{name}</p>
        <p data-testid={ `${idx}-product-total-value` }>{` R$ ${salePrice.toFixed(two).toString().replace('.', ',')}`}</p>
        <p
          data-testid="order-total-value"
        >
          {`Total: R$ ${totalSalePrice.toFixed(two).toString().replace('.', ',')}`}
        </p>
      </div>
    );
  }
  return true;
});

export default CardrDetailsOrders;
