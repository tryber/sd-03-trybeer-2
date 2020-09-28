import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ContextAplication } from '../../Context';

const ButtonViewCart = () => {
  const { cart } = useContext(ContextAplication);
  const history = useHistory();

  const totalValue = cart.reduce((acc, { price }) => {
    return acc + price
  }, 0)

  return (
    <div>
      <button
        type="button"
        data-testid="checkout-bottom-btn"
        onClick={() => history.push('/checkout')}
      >
        Ver Carrinho
        <p data-testid="checkout-bottom-btn-value">{ totalValue }</p>
      </button>
    </div>
  )
}

export default ButtonViewCart;
