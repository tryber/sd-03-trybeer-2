import React from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from '../../Services';

const exit = (history) => {
  logout('token');
  return history.push('/login');
};

const LogoutButton = () => {
  const history = useHistory();

  return (
    <div>
      <button
        type="button"
        data-testid="side-menu-item-logout"
        onClick={ () => exit(history) }
      >
        Sair
      </button>
    </div>
  );
};

export default LogoutButton;
