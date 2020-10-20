import React from 'react';
import { useHistory } from 'react-router-dom';

const AdminProfileButton = () => {
  const history = useHistory();

  return (
    <div>
      <button
        type="submit"
        data-testid="side-menu-item-profile"
        onClick={ () => history.push('/admin/profile') }
      >
        Meus Perfil
      </button>
    </div>
  );
};

export default AdminProfileButton;
