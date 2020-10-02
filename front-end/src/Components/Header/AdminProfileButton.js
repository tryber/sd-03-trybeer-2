import React from 'react';
import { useHistory } from 'react-router-dom';

const AdminProfileButton = () => {
  const history = useHistory();

  return (
    <div>
      <button
        type="button"
        data-testid="side-menu-item-profile"
        onClick={ () => history.push('/admin/profile') }
      >
        Meu Perfil
      </button>
    </div>
  );
};

export default AdminProfileButton;
