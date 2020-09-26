import React, { useContext, useEffect } from 'react';
import { ContextAplication } from '../../Context';
import { updateCart } from '../../Services';

const handleChange = (name, price, cart, setCart, qnt) => {
  setCart([...cart, { name, price }]);
};

const ButtonPlus = ({ idx }) => {
  const { showProducts, cart, setCart } = useContext(ContextAplication);
  const { name, price, quantity } = showProducts[idx];

  console.log(quantity);
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

export default ButtonPlus;
