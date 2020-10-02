import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ContextAplication } from '../../Context';

const zero = 0;

const handleChange = (name, cart, setCart) => {
  if (cart.length === zero) return;

  cart.forEach((product, i) => {
    if (product.name === name && i >= zero) {
      const newCart = cart.filter((_p, idx) => i !== idx);
      setCart(newCart);
    }
  });
};

const ButtonMinus = ({ idx, name }) => {
  const { cart, setCart } = useContext(ContextAplication);

  return (
    <div>
      <button
        type="button"
        data-testid={ `${idx}-product-minus` }
        onClick={ () => handleChange(name, cart, setCart) }
      >
        -
      </button>
    </div>
  );
};

ButtonMinus.propTypes = {
  idx: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default ButtonMinus;
