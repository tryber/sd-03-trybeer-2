import React from 'react'

const AdminDetailCard = ({ listDetail }) => listDetail.map(({ id,status, totalPrice }, idx) => (
  <div>
    <h1 data-testid="order-number">Pedido:{id}</h1>
    <h1 data-testid={`${idx}-order-status`}>{status}</h1>
    <p d-ata-testid="${idx}-product-qtd">Quantidade-produto</p>
    <p data-testid="${idx}product-name">Nome do produto</p>
    <p data-testid="${idx}order-unit-price">Valor-por-unidade</p>
    <p data-testid="${idx}product-total-value">{totalPrice}</p>
    <p>preço</p>
    <button data-testid="mark-as-delivered-btn">Marcar como entregue</button>
  </div>
));

export default AdminDetailCard;
