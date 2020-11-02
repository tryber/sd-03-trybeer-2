import React, { useState } from 'react'
import api from '../../Services/api';

const two = 2;

const AdminDetailCard = ({ listDetail }) => {
  const firstEl = listDetail[0] || {};
  const [newStatus, setNewStatus] = useState('Pendente');

  return (
    <div>
      <h1 data-testid="order-number">Pedido {firstEl.saleId}</h1>
      <h2 data-testid="order-status">{newStatus}</h2>
      {listDetail.map(({ name, price, quantity }, idx) => {
        const priceXqnt = (price * quantity);
        return (
          <div>
            <p data-testid={`${idx}-product-qtd`}>Unid:{quantity}</p>
            <p data-testid={`${idx}-product-name`}>{name}</p>
            <p data-testid={`${idx}-order-unit-price`}>
              {` (R$ ${price.toFixed(two).toString().replace('.', ',')})`}
            </p>
            <p data-testid={`${idx}-product-total-value`}>
              {` R$ ${priceXqnt.toFixed(two).toString().replace('.', ',')}`}
            </p>
          </div>
        )
      })}
      <p data-testid="order-total-value">
        {`Total: R$ ${firstEl.totalPrice.toFixed(two).toString().replace('.', ',')}`}
      </p>
      {newStatus === 'Pendente' ? <button
        onClick={() => {
          const locationUrl = window.location.pathname;
          const id = locationUrl.charAt(locationUrl.length - 1);
          api.put(`/admin/orders/${id}`, { status: 'Entregue' });
          setNewStatus('Entregue');
        }}
        data-testid="mark-as-delivered-btn">Marcar como entregue</button> : null}
    </div>
  )
}


export default AdminDetailCard;
