import React, { useContext } from 'react';
import { ContextAplication } from '../../Context';



const renderItens = (cart) => (
  cart.map(({ name, price, qtd }) =>
<li>{name}  R$ {price}</li>)
);

const UserCheckout = () => {

  const { cart } = useContext(ContextAplication);

  return (
    <div>
      <form>
        <h1 data-testid="top-title">Finalizar pedido</h1>
        <h1>Produtos</h1>
        {cart && renderItens(cart)}
        <h2 data-testid="order-total-value">total:</h2>
        <div>Endereço</div>
        <div>Rua</div>
        <input data-testid="checkout-street-input" type="text" />
        <div>Número da casa:</div>
        <input data-testid="checkout-house-number-input" type="text" />
        <div>
          <button type="submit" data-testid="checkout-finish-btn">Finalizar Pedido</button>
        </div>
      </form>
    </div>
  );
};

export default UserCheckout;
