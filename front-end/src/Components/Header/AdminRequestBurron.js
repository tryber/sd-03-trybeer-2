import React from 'react';
import { useHistory } from 'react-router-dom';

const MyRequestsButton = () => {
  const history = useHistory();

  return (
    <div>
      <button
        type="button"
        data-testid="side-menu-item-orders"
        onClick={ () => history.push('/admin/orders') }
      >
        Meus Pedidos
      </button>
    </div>
  );
};

export default MyRequestsButton;