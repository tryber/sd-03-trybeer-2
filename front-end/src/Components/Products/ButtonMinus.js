import React, { useContext } from 'react';
import { ContextAplication } from '../../Context';


const ButtonMinus = ({ idx }) => {
  const { showProducts, setShowProducts } = useContext(ContextAplication);

  return (
    <div>
      <button data-testid={`${ idx }-product-minus`}>-</button>
    </div>
  );
};

export default ButtonMinus;
