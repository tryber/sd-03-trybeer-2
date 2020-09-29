import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ContextAplication } from '../../Context';

const initialPrice = 0;
const toFixed = 2;

const ButtonViewCart = () => {
  const { cart } = useContext(ContextAplication);
  const history = useHistory();

  const totalValue = () => cart.reduce((acc, e) => Number(acc + e.price), initialPrice);

  return (
    <div>
      <button
        type="button"
        data-testid="checkout-bottom-btn"
        onClick={ () => history.push('/checkout') }
      >
        Ver Carrinho
        <p data-testid="checkout-bottom-btn-value">{ `R$ ${totalValue().toFixed(toFixed)}` }</p>
      </button>
    </div>
  );
};

export default ButtonViewCart;
