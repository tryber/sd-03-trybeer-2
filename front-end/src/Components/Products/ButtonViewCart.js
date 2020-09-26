import React from 'react';
import { useHistory } from 'react-router-dom';


const ButtonViewCart = () => {
  const history = useHistory();

  return (
    <div>
      <button
        type="button"
        data-testid="checkout-bottom-btn"
        onClick={() => history.push('/checkout')}
      >
        Ver Carrinho
        <p data-testid="checkout-bottom-btn-value">Total Price</p>
      </button>
    </div>
  )
}

export default ButtonViewCart;
