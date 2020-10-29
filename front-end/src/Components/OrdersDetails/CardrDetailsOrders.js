import React from 'react';
import { randomNumber } from '../../Services';

const one = 1;
const two = 2;
const locationUrl = window.location.pathname;
const id = locationUrl.charAt(locationUrl.length - one);

const CardrDetailsOrders = ({ orderDetails }) => orderDetails.map((e, idx) => {
  if (e.orderId === Number(id)) {
    const date = new Date(e.timestamp);
    const finshDate = `${date.getDate()}/${date.getMonth()}`;
    return (
      <div key={ randomNumber() }>
        <p data-testid="order-number">{e['saleId​​']}</p>
        <p data-testid="order-date">{finshDate}</p>
        <p data-testid={ `${idx}-product-qtd` }>{e.quantity}</p>
        <p data-testid={ `${idx}-product-name` }>{e.name}</p>
        <p data-testid={ `${idx}-product-total-value` }>{` R$ ${e.salePrice.toFixed(two).toString().replace('.', ',')}`}</p>
        <p
          data-testid="order-total-value"
        >
          {`Total: R$ ${e.totalSalePrice.toFixed(two).toString().replace('.', ',')}`}
        </p>
      </div>
    );
  }
  return true;
});

export default CardrDetailsOrders;
