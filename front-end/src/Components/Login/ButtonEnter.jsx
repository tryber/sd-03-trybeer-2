import React, { useContext } from 'react';
import { ContextAplication } from '../../Context';

const ButtonEnter = () => {
  const { disableButton } = useContext(ContextAplication);
  return (
    <div>
      <button
        disabled={ disableButton }
        data-testid="signin-btn"
        type="submit"
      >
        ENTRAR
      </button>
    </div>
  );
};
export default ButtonEnter;
