import React from 'react';
import { useHistory } from 'react-router-dom';


const MyRequestsButton = () => {
  const history = useHistory();

  return (
    <div>
      <button
        type="button"
        data-testid="side-menu-item-my-orders"
        onClick={ () => history.push('/orders') }
      >
        Meus Pedidos
      </button>
    </div>
  )
}

export default MyRequestsButton;
