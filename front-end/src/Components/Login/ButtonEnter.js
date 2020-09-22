import React, { useContext } from 'react';
import { ContextPlication } from '../../Context';

const ButtonEnter = () => {
  const { disableButton } = useContext(ContextPlication);
  return (
    <div>
      <button
        disabled={ disableButton }
        data-testid="signin-btn"
        type="submit"
      >
        Entrar
      </button>
    </div>
  );
};
export default ButtonEnter;
