import React, { useContext, useEffect } from 'react';
import Proptypes from 'prop-types';
import { ContextAplication } from '../../Context';
import { updateCart } from '../../Services';

const zero = 0;

const ButtonPlus = ({ idx }) => {
  const { showProducts, cart, setCart } = useContext(ContextAplication);
  const { name, price, id } = showProducts[idx];

  const handleChange = (eleName, elePrice) => {
    let isChanged = false;
    setCart((state) => {
      const newState = state.map((ele) => {
        if (ele.name === eleName) {
          isChanged = true;
          return { ...ele, qnt: ele.qnt + 1 };
        }
        return ele;
      });
      if (!isChanged) {
        return [...state, {
          id, name: eleName, price: elePrice, qnt: 1,
        }];
      }
      return newState;
    });
  };

  useEffect(() => {
    cart.map((ele) => {
      if (ele.qnt === zero) {
        cart.forEach((product, i) => {
          if (product.name === ele.name && i >= zero) {
            const newCart = cart.filter((_p, index) => i !== index);
            setCart(newCart);
          }
        });
      } return null;
    });
    updateCart([...cart]);
  }, [cart, setCart]);

  return (
    <div>
      <button
        type="button"
        data-testid={ `${idx}-product-plus` }
        onClick={ () => handleChange(name, price) }
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
