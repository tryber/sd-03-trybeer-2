import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ContextAplication } from '../../Context';

const initialPrice = 0;
const toFixed = 2;

const ButtonViewCart = () => {
  const { cart } = useContext(ContextAplication);
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();

  const totalValue = () => {
    const total = cart.reduce((acc, e) => Number(acc + e.price), initialPrice);
    return total;
  };

  useEffect(() => {
    if (cart.length > initialPrice) setIsDisabled(false);
    if (cart.length === initialPrice) setIsDisabled(true);
  }, [cart, setIsDisabled, isDisabled]);

  return (
    <div>
      <button
        disabled={ isDisabled }
        type="button"
        data-testid="checkout-bottom-btn"
        onClick={ () => history.push('/checkout') }
      >
        Ver Carrinho
      </button>
      <p
        data-testid="checkout-bottom-btn-value"
      >
        { `R$ ${totalValue().toFixed(toFixed).toString().replace('.', ',')}` }
      </p>
    </div>
  );
};

export default ButtonViewCart;
