import React, { useContext } from 'react';
import { ContextAplication } from '../../Context';

const handleChange = (name, cart, setCart) => {
  
  if (cart.length === 0) return;
  
  cart.forEach((product, i) => {
    if (product.name === name && i >= 0) {
      const newCart = cart.filter((_p, idx) =>  i !== idx);
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
        data-testid={`${ idx }-product-minus`}
        onClick={ () => handleChange(name, cart, setCart) }
      >
        -
      </button>
    </div>
  );
};

export default ButtonMinus;
