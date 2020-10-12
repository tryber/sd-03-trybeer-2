import React from 'react';
import { Link } from 'react-router-dom';
import { randomNumber } from '../../Services';

const CardOrders = ({ ordersUser }) => (
  ordersUser.map(({ total, id, date }, idx) => (
    <div key={ randomNumber() }>
      <Link to="/orders/:id">
        <div data-testid={ `${idx}-order-card-container` }>
          <p data-testid={ `${idx}-order-number` }>{`Pedido ${id}`}</p>
          <p data-testid={ `${idx}-order-date` }>{date}</p>
          <p data-testid={ `${idx}-order-total-value` }>{`R$ ${total}`}</p>
        </div>
      </Link>
    </div>
  ))
);

export default CardOrders;
