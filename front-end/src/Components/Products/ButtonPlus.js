import React, { useContext, useEffect } from 'react';
import Proptypes from 'prop-types';
import { ContextAplication } from '../../Context';
import { updateCart } from '../../Services';

const countItem = (e, cart) => cart.filter(({ name }) => name === e)
  .map(({ name }) => name).length;

const handleChange = (name, price, cart, setCart) => {
  setCart([...cart, { name, price, ['qnt']: countItem(name, cart) + 1 }]);
};

const ButtonPlus = ({ idx }) => {
  const { showProducts, cart, setCart } = useContext(ContextAplication);
  const { name, price } = showProducts[idx];

  useEffect(() => {
    updateCart([...cart]);
  }, [cart]);

  return (
    <div>
      <button
        type="button"
        data-testid={ `${idx}-product-plus` }
        onClick={ () => handleChange(name, price, cart, setCart) }
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
