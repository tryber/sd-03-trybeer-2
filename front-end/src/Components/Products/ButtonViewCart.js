import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ContextAplication } from '../../Context';

const zero = 0;
const two = 2;

const ButtonViewCart = () => {
  const { cart } = useContext(ContextAplication);
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();

  const totalValue = () => {
    const total = cart.reduce((acc, { price, qnt }) => Number(acc + (price * qnt)), zero);
    return total.toFixed(two).toString().replace('.', ',');
  };

  useEffect(() => {
    if (cart.length > zero) setIsDisabled(false);
    if (cart.length === zero) setIsDisabled(true);
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
        { `R$ ${totalValue()}` }
      </p>
    </div>
  );
};

export default ButtonViewCart;
