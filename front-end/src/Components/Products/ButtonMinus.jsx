import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ContextAplication } from '../../Context';

const zero = 0;

const ButtonMinus = ({ idx }) => {
  const { setCart, showProducts } = useContext(ContextAplication);
  const { name } = showProducts[idx];

  const handleChange = () => {
    setCart((state) => {
      const newState = state.map((ele) => {
        if (ele.name === name && ele.qnt > zero) {
          return { ...ele, qnt: ele.qnt - 1 };
        }
        return ele;
      });
      return newState;
    });
  };

  return (
    <div>
      <button
        type="button"
        data-testid={ `${idx}-product-minus` }
        onClick={ () => handleChange() }
      >
        -
      </button>
    </div>
  );
};

ButtonMinus.propTypes = {
  idx: PropTypes.number.isRequired,
};

export default ButtonMinus;
