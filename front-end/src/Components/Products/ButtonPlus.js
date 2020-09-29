import React, { useContext, useEffect } from 'react';
import Proptypes from 'prop-types';
import { ContextAplication } from '../../Context';
import { updateCart } from '../../Services';

const handleChange = (name, price, cart, setCart) => {
  setCart([...cart, { name, price }]);
};

const ButtonPlus = ({ idx }) => {
  const { showProducts, cart, setCart } = useContext(ContextAplication);
  const { name, price, quantity } = showProducts[idx];

  useEffect(() => {
    updateCart([...cart]);
  }, [cart]);

  return (
    <div>
      <button
        type="button"
        data-testid={ `${idx}-product-plus` }
        onClick={ () => handleChange(name, price, cart, setCart, quantity) }
      >
        +
      </button>
    </div>
  );
};

ButtonPlus.propTypes = {
  idx: Proptypes.number.isRequired,
};

export default ButtonPlus;
