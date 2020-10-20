import React from 'react';
import { Link } from 'react-router-dom';
import { randomNumber } from '../../Services';

const one = 1;

const CardOrders = ({ ordersUser }) =>
  ordersUser.map(({ id, sale_date, total_price }, idx) => {
    const date = new Date(sale_date);
    const finshDate = `${date.getDate()}/${date.getMonth() + one}`;
    return (
      <div key={randomNumber()}>
        <Link to={`/orders/${id}`}>
          <div data-testid={`${idx}-order-card-container`}>
            <p data-testid={`${idx}-order-number`}>{`Pedido ${id}`}</p>
            <p data-testid={`${idx}-order-date`}>{finshDate}</p>
            <p
              data-testid={`${idx}-order-total-value`}
            >{`R$ ${total_price.toFixed(2).toString().replace('.', ',')}`}</p>
          </div>
        </Link>
      </div>
    );
  });

export default CardOrders;
