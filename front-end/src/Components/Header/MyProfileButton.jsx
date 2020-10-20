import React from 'react';
import { useHistory } from 'react-router-dom';

const MyProfileButton = () => {
  const history = useHistory();

  return (
    <div>
      <button
        type="button"
        data-testid="side-menu-item-my-profile"
        onClick={ () => history.push('/profile') }
      >
        Meu Perfil
      </button>
    </div>
  );
};

export default MyProfileButton;
